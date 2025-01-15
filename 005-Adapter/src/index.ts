import PaymentProcessor from "./PaymentProcessor ";
import PaymentAdapter from "./PaymentAdapter";
import payByCard from "./PaymentByCard";
import payBySMS from "./PaymentBySMS";
import payBySBP from "./PaymentBySBP";
import payByOldSBP from "./PaymentByOldSBP";

// Getting UI elements
var infoPanel: HTMLSpanElement;
var btnSubmit: HTMLButtonElement;
var payMethod: HTMLSelectElement;
var payAmount: HTMLInputElement;

infoPanel = document.querySelector("#payment-data") as HTMLSpanElement;
btnSubmit = document.querySelector("#submit") as HTMLButtonElement;
payMethod = document.querySelector("#payMethod") as HTMLSelectElement;
payAmount = document.querySelector("#payAmount") as HTMLInputElement;

// Processes payment and shows information
function processPayment(processor: PaymentProcessor) {
    var info = processor.pay(parseFloat(payAmount.value));
    if (info) {
        infoPanel.innerHTML = info;
    }
}

// Submit button click event
btnSubmit.onclick = (event) => {

    // Call appropriate payment method
    switch (payMethod.value) {
        case "payBySBP": {
            processPayment(new PaymentAdapter(payBySBP));
            break;
        }
        case "payByCard": {
            processPayment(new PaymentAdapter(payByCard));
            break;
        }
        case "payBySMS": {
            processPayment(new PaymentAdapter(payBySMS));
            break;
        }
        case "payByOldSBP": {
            processPayment(new PaymentAdapter(payByOldSBP));
            break;
        }
        default: {
            break;
        }
    }
}


// Checks form filling
function checkForm() {
    // If form is filled:
    if (payAmount.value !== "" && !Number.isNaN(Math.floor(parseFloat(payAmount.value)))) {
        // Enable submitting
        btnSubmit.disabled = false;
    } else {
        // Otherwise, disable the button
        btnSubmit.disabled = true;
    }
}

// Checks allowed characters on key down event
payAmount.onkeydown = (event) => {
    if (/^([0-9\.])$/.test(event.key) || event.key == "Backspace") {
        return true;
    } else {
        return false;
    }
}

// Processes key up events on user login field
payAmount.onkeyup = (event) => {
    checkForm();
}