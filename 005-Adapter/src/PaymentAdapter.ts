import PaymentProcessor from "./PaymentProcessor ";
import { PaymentBySMS } from "./PaymentBySMS";
import { PaymentBySBP } from "./PaymentBySBP";
import { PaymentByOldSBP } from "./PaymentByOldSBP";

/*
    PaymentAdapter implements common interface PaymentProcessor
    to different/legacy payment method
*/

class PaymentAdapter implements PaymentProcessor {
    // Supported pay processors
    private payProcessor: PaymentProcessor|PaymentBySMS|PaymentByOldSBP;

    constructor(payProcessor: PaymentProcessor|PaymentBySMS|PaymentByOldSBP) {
        this.payProcessor = payProcessor;
    }

    // Adopts different/legacy interfaces to the expected one
    pay(amount: number): string {
        var payBy = this.payProcessor;
        var result = "PaymentAdapter calls " + this.payProcessor.constructor.name + "<p>";

        // Pay by SMS
        if (this.payProcessor.constructor.name === "PaymentBySMS") {
            result += (payBy as PaymentBySMS).SendMoneyBySMS(amount);
        // Pay by legacy (old) SBP
        } else if (this.payProcessor.constructor.name === "PaymentByOldSBP") {
            result += (payBy as PaymentByOldSBP).payByOldSBP(amount);
        } else {
            result += (payBy as PaymentBySBP).pay(amount);
        }
        return result;
    }
}

export default PaymentAdapter;