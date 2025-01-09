/*
    PaymentBySMS class implements legacy SMS payment method
*/

export class PaymentBySMS {
    SendMoneyBySMS(amount: number) {
        var result = "Paid by SMS = " + amount;
        console.log(result);
        return result;
    }
}

// Creating SMS payment object (here we can use Singleton patter, by the way)
const payBySMS = new PaymentBySMS();

export default payBySMS;