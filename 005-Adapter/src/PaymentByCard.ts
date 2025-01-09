import PaymentProcessor from "./PaymentProcessor ";

/*
    PaymentByCard class implements card payment method
*/

class PaymentByCard implements PaymentProcessor {
    pay(amount: number) {
        var result = "Paid by Card = " + amount;
        console.log(result);
        return result;
    }
}

// Creating card payment object (here we can use Singleton patter, by the way)
const payByCard = new PaymentByCard();

export default payByCard;