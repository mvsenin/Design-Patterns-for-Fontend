import PaymentProcessor from "./PaymentProcessor ";

/*
    PaymentBySBP class implements SBP actual and legacy payment methods
*/

export class PaymentByOldSBP {
    // Legacy (old) payment method by SBP
    payByOldSBP(amount: number) {
        var result = "Paid by Old SBP = " + amount;
        console.log(result);
        return result;
    }
}

// Creating SBP payment object (here we can use Singleton patter, by the way)
const payByOldSBP = new PaymentByOldSBP();

export default payByOldSBP;