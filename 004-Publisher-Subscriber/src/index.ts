import Publisher from "./publisher";
import Subscriber from "./subscriber";


// Get UI elements
var userLogin : HTMLInputElement;
var userPassword : HTMLInputElement;
var btnSubmit : HTMLButtonElement;
var publisherContainer: HTMLElement;

userLogin = document.querySelector("#userLogin") as HTMLInputElement;
userPassword = document.querySelector("#userPassword") as HTMLInputElement;
btnSubmit = document.querySelector("#submit") as HTMLButtonElement;
publisherContainer = document.querySelector("#publisherContainer") as HTMLElement;


// Create one publisher
const eventPublisher = new Publisher;

// Create three subscribers
const eventSubscriber1 = new Subscriber("Please enter login");
const eventSubscriber2 = new Subscriber("Please enter password");
const eventSubscriber3 = new Subscriber("Please press submit button");

// Getting subscribers 1 & 2 to listen to the the input field events form
// the publisher
eventPublisher.subscribe("userLogin", eventSubscriber1);
eventPublisher.subscribe("userPassword", eventSubscriber2);

// Emmit the input field events
eventPublisher.publish("userLogin", "no data", publisherContainer);
eventPublisher.publish("userPassword", "no data", publisherContainer);


/*
    Provide event processing:
*/

// Checks form filling
function checkForm() {
    // If form is filled:
    if (userLogin.value !== "" && userPassword.value !== "") {
        // Enable submitting
        btnSubmit.disabled = false;
        // Subscribe its event listener and publish the event
        eventPublisher.subscribe("submit", eventSubscriber3);
        eventPublisher.publish("submit", "click submit", publisherContainer);
    } else {
        // Otherwise, disable the button and unsubscribe its event listener
        btnSubmit.disabled = true;
        eventPublisher.unsubscribe("submit", eventSubscriber3);
    }
}

// Processes key up events on user login field
userLogin.onkeyup = (event) => {
    if (userLogin.value !== "") {
        eventPublisher.publish("userLogin", "OK", publisherContainer);
    } else {
        eventPublisher.publish("userLogin", "no data", publisherContainer);
    }
    checkForm();
}

// Processes key up events on user password field
userPassword.onkeyup = (event) => {
    if (userPassword.value !== "") {
        eventPublisher.publish("userPassword", "OK", publisherContainer);
    } else {
        eventPublisher.publish("userPassword", "no data", publisherContainer);
    }
    checkForm();
}

// Processes click events on submit button
btnSubmit.onclick = (event) => {
    eventPublisher.publish("submit", "OK", publisherContainer);
}