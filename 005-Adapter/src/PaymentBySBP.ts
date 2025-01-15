import PaymentProcessor from "./PaymentProcessor ";

/*
    PaymentBySBP class implements SBP actual and legacy payment methods
*/

export class PaymentBySBP implements PaymentProcessor {
    // Actual payment method by SBP
    pay(amount: number) {
        var result = "Paid by SBP = " + amount;
        console.log(result);
        return result;
    }
}

// Creating SBP payment object (here we can use Singleton patter, by the way)
const payBySBP = new PaymentBySBP();

export default payBySBP;