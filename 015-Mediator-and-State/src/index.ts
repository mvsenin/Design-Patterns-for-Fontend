import FlightControlPanel from "./FlightControlPanel";
import Message from "./Message";

// Getting UI elements
var airTrafficControlPanel = document.getElementById('airTrafficControlPanel') as HTMLElement;
var infoPanel = document.getElementById('infoPanel') as HTMLElement;
var btnStartFlight = document.getElementById('startFlight') as HTMLButtonElement;
var closeAir = document.getElementById('closeAir') as HTMLButtonElement;

// Creating flight control panel object
var flightControlPanel = new FlightControlPanel(infoPanel, airTrafficControlPanel);

// Event processing
btnStartFlight.onclick = (event) => {
    flightControlPanel.createFlight();
    closeAir.disabled = false;
}

closeAir.onclick = (event) => {
    const message = new Message(
        'Tower'
        , 'EVERYONE'
        , `it's snowing`
        , 'airport temporary closed');
    flightControlPanel.notifyAllFlights(message);
}