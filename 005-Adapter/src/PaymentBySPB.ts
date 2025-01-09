import PaymentProcessor from "./PaymentProcessor ";

/*
    PaymentBySPB class implements SPB actual and legacy payment methods
*/

export class PaymentBySPB implements PaymentProcessor {
    // Actual payment method by SPB
    pay(amount: number) {
        var result = "Paid by SPB = " + amount;
        console.log(result);
        return result;
    }
    
    // Legacy (old) payment method by SPB
    payByOldSPB(amount: number) {
        var result = "Paid by Old SPB = " + amount;
        console.log(result);
        return result;
    }
}

// Creating SPB payment object (here we can use Singleton patter, by the way)
const payBySPB = new PaymentBySPB();

export default payBySPB;