/*
* The module initializes the Observer pattern demo app
*/

import Observer from "./observer";
import Sensor from "./sensor";

// Getting DOM elements
var sensorValue : HTMLInputElement;
var btnSetSensor : HTMLButtonElement
var btnResetSensor : HTMLButtonElement
var btnAddMonitor : HTMLButtonElement;
var btnNotifyOdd : HTMLButtonElement
var btnNotifyEven : HTMLButtonElement;
var infoPanel : HTMLElement;

sensorValue = document.querySelector("#sensorValue") as HTMLInputElement;
infoPanel = document.querySelector("#monitors-data") as HTMLButtonElement;
btnSetSensor = document.querySelector("#set-sensor-value") as HTMLButtonElement;
btnResetSensor = document.querySelector("#reset-sensor-value") as HTMLButtonElement;
btnNotifyOdd = document.querySelector("#notify-odd") as HTMLButtonElement;
btnNotifyEven = document.querySelector("#notify-even") as HTMLButtonElement;
btnAddMonitor = document.querySelector("#add-monitor") as HTMLButtonElement;

// Create the sensor
const sensor = new Sensor('Sensor', infoPanel);

// Buttons' click event handlers

// The following methods set new sensor value
function setSensorValue() {
    infoPanel.innerHTML = '';
    infoPanel.classList.remove("italic");
    sensor.setValue(sensorValue.value);
}
btnSetSensor.onclick = (event) => {
    setSensorValue();
}
sensorValue.onchange = (event) => {
    setSensorValue();
}
sensorValue.onkeyup = (event) => {
    setSensorValue();
}

// Reset sensor
btnResetSensor.onclick = (event) => {
    infoPanel.innerHTML = '';
    infoPanel.classList.add("italic");
    sensorValue.value = '0';
    sensor.setValue(sensorValue.value);
}

// Add new monitor for the sensor
btnAddMonitor.onclick = (event) => {
    infoPanel.innerHTML = '';
    infoPanel.classList.remove("italic");
    const observer = new Observer('Observer # '.concat((sensor.getNoOfObeserver() + 1).toString()));
    sensor.addObserver(observer);
    console.log(observer);
    console.log(sensor);
}

// Notify odd observers only
btnNotifyOdd.onclick = (event) => {
    infoPanel.innerHTML = '';
    infoPanel.classList.remove("italic");
    sensor.notifyObservers('odd');
}

// Notify even observers only
btnNotifyEven.onclick = (event) => {
    infoPanel.innerHTML = '';
    infoPanel.classList.remove("italic");
    sensor.notifyObservers('even');
}