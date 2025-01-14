/*
* The module initializes the Facde pattern demo app
*/

import facade from "./facade";

// Getting DOM elements
const globalStateElem = document.querySelector(".global-state #subsystem-info");
const btnGetSubsystemInfo = document.querySelector("#get-subsystem-info");
const btnLogSubsystemInfo = document.querySelector("#log-subsystem-info");

// Button click event handlers
btnGetSubsystemInfo.onclick = (event) => {
    globalStateElem.innerHTML = facade.commonInfoInterface();
    globalStateElem.classList.remove("italic");
}

btnLogSubsystemInfo.onclick = (event) => {
    facade.commonLogInterface();
    globalStateElem.innerHTML = 'Please open browser console to see the info';
    globalStateElem.classList.add("italic");
}