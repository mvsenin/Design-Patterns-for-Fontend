/*
    PaymentProcessor interface describes unified payment method inteface
    for different/legacy payment methods
*/

interface PaymentProcessor {
    pay(amount: number): string;
}

export default PaymentProcessor;