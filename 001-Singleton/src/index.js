import globalStyle from "./globalStyles";

const globalStateElem = document.querySelector(".global-state #selected-color");

globalStateElem.innerHTML = globalStyle.getPropertyByName("color") + ' | ' + globalStyle.getPropertyByName("dt");
