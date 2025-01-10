import globalStyle from "./globalStyles";

// Get UI element to show initially selected color
const globalStateElem = document.querySelector(".global-state #selected-color");

globalStateElem.innerHTML = globalStyle.getPropertyByName("color") + ' | ' + globalStyle.getPropertyByName("date");