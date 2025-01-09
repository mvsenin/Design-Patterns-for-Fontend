import { PaymentBySMS } from "./PaymentBySMS";
import PaymentProcessor from "./PaymentProcessor ";
import { PaymentBySPB } from "./PaymentBySPB";

/*
    PaymentAdapter implements common interface PaymentProcessor
    to different/legacy payment method
*/

class PaymentAdapter implements PaymentProcessor {
    // Supported pay processors
    private payProcessor: PaymentBySMS|PaymentBySPB;

    constructor(payProcessor: PaymentBySMS|PaymentBySPB) {
        this.payProcessor = payProcessor;
    }

    // Adopts different/legacy interfaces to the expected one
    pay(amount: number): string {
        var payBy = this.payProcessor;
        var result = "PaymentAdapter calls " + this.payProcessor.constructor.name + "<p>";

        // Pay by SMS
        if (this.payProcessor.constructor.name === "PaymentBySMS") {
            result += (payBy as PaymentBySMS).SendMoneyBySMS(amount);
        // Pay by legacy (old) SPB
        } else if (this.payProcessor.constructor.name === "PaymentBySPB") {
            result += (payBy as PaymentBySPB).payByOldSPB(amount);
        }
        return result;
    }
}

export default PaymentAdapter;