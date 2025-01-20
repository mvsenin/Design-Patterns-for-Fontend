/*
* The module initializes the Facde pattern demo app
*/

import Facade from "./facade";
import { SubsystemA as Subsystem1A, SubsystemB as Subsystem1B, SubsystemC as Subsystem1C } from "./subsystemOne.js";
import { SubsystemA as Subsystem2A, SubsystemB as Subsystem2B, SubsystemC as Subsystem2C } from "./subsystemTwo.js";

// Creating the Facade instance with default configuration
var facade = new Facade();

// DBG: you can combine subsystems as you need
// var facade = new Facade(Subsystem1B, Subsystem2A, Subsystem2B);

// Getting DOM elements
const globalStateElem = document.querySelector(".global-state #subsystem-info");
const btnGetSubsystemInfo = document.querySelector("#get-subsystem-info");
const btnLogSubsystemInfo = document.querySelector("#log-subsystem-info");
const btnNewSystem = document.querySelector("#generate-new-system");

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

btnNewSystem.onclick = (event) => {
    // Get random components' versions
    var componentA = [Subsystem1A, Subsystem2A];
    var SubsystemA = componentA[Math.floor(Math.random() * componentA.length)];
    var componentB = [Subsystem1B, Subsystem2B];
    var SubsystemB = componentB[Math.floor(Math.random() * componentB.length)];
    var componentC = [Subsystem1C, Subsystem2C];
    var SubsystemC = componentC[Math.floor(Math.random() * componentC.length)];

    // New Facade instance with new components still works providing the same interface(s)
    facade = new Facade(SubsystemA, SubsystemB, SubsystemC);

    globalStateElem.classList.remove("italic");
    globalStateElem.innerHTML = facade.commonInfoInterface();
    
    facade.commonLogInterface();
}