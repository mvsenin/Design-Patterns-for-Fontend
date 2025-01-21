import Navigator from './Navigator';
import {WalkStrategy, CarStrategy, PublicStrategy, AirStrategy, WaterStrategy} from './Strategy';

var addWalkRoute = document.getElementById('add-walking-route') as HTMLButtonElement;
var addCarRoute = document.getElementById('add-car-route') as HTMLButtonElement;
var addPublicRoute = document.getElementById('add-public-route') as HTMLButtonElement;
var addAirRoute = document.getElementById('add-air-route') as HTMLButtonElement;
var addWaterRoute = document.getElementById('add-water-route') as HTMLButtonElement;
var output = document.getElementById('output') as HTMLElement;

const navigator = new Navigator();

function updateOutput() {
    output.innerHTML = navigator.getRouteDescription();
    output.classList.remove('italic');
}

addWalkRoute.onclick = (event) => {
    navigator.setRouteStrategy(new WalkStrategy());
    navigator.buildRoute("Park X", "Museum Y")
    updateOutput();
}

addCarRoute.onclick = (event) => {
    navigator.setRouteStrategy(new CarStrategy());
    navigator.buildRoute("Museum Y","Streer A")
    updateOutput();
}

addPublicRoute.onclick = (event) => {
    navigator.setRouteStrategy(new PublicStrategy());
    navigator.buildRoute("Streer A", "Street Y")
    updateOutput();
}

addAirRoute.onclick = (event) => {
    navigator.setRouteStrategy(new AirStrategy());
    navigator.buildRoute("City Y", "City Y")
    updateOutput();
}

addWaterRoute.onclick = (event) => {
    navigator.setRouteStrategy(new WaterStrategy());
    navigator.buildRoute("City A", "City V");
    updateOutput();
}