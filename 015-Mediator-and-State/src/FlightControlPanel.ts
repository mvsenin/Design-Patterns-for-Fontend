import AirTrafficControl from "./AirTrafficControl";
import Flight from "./Flight";
import Message from "./Message";

/**
 * `FlightControlPanel` describes flight control panel intendent for new flight
 * creation and flights' state information updating
 */
export default class FlightControlPanel {
    // Information panel control
    private infoPanel: HTMLElement|undefined;

    // Pool of flights
    private flights: Flight[];

    // Control center object
    private airTrafficControl: AirTrafficControl;

    constructor(infoPanel: HTMLElement, airTrafficControlPanel: HTMLElement) {
        this.infoPanel = infoPanel;
        this.flights = [];
        this.airTrafficControl = new AirTrafficControl(this, airTrafficControlPanel);
    }

    // Starts new flight
    createFlight() {
        // Creating new flight
        var flight = new Flight(
            `Flight ${(this.flights.length + 1)}`   // flight name
            , this.airTrafficControl                // link to control center
            , Math.floor((Math.random() * 10) + 1));// random data updating period

        // Pushing the flight to the pool
        this.flights.push(flight);

        // Starting the flight
        flight.startFlight();

        // Updating flight control panel information
        this.update();
    }

    // Generates info panel content with flights' states
    update() {
        if (this.infoPanel !== undefined) {
            // Result variable for the panel DOM
            var res = '';
            
            // Passing through flights to get HTML representation for them
            for (const fly of this.flights) {
                // Getting flight state
                var state = fly.getState();

                // Result variable for the flight DOM
                var str = '';

                // Adding representation of flight states to the DOM
                for (const st of ['FlightStateTaxiForTakeOff', 'FlightStateReadyForTakeOff', 'FlightStateTakeOff', 'FlightStateCruise'
                                    , 'FlightStateApproach', 'FlightStateLanding', 'FlightStateLanded']) {
                    
                    var stateName = '';
                    
                    switch (st) {
                        case 'FlightStateTaxiForTakeOff': {
                            stateName = fly.flightStateTaxiForTakeOff.getPresentation();
                            break;
                        }
                        case 'FlightStateReadyForTakeOff': {
                            stateName = fly.flightStateReadyForTakeOff.getPresentation();
                            break;
                        }
                        case 'FlightStateTakeOff': {
                            stateName = fly.flightStateTakeOff.getPresentation();
                            break;
                        }
                        case 'FlightStateCruise': {
                            stateName = fly.flightStateCruise.getPresentation();
                            break;
                        }
                        case 'FlightStateApproach': {
                            stateName = fly.flightStateApproach.getPresentation();
                            break;
                        }
                        case 'FlightStateLanding': {
                            stateName = fly.flightStateLanding.getPresentation();
                            break;
                        }
                        case 'FlightStateLanded': {
                            stateName = fly.flightStateLanded.name;
                            break;
                        }
                        default: {
                            break;
                        }
                    }
                    
                    // Generating DOM for the flight, indicating active state
                    str += `<div${state.constructor.name === st ? ' class="cbItem"' : ''}>${stateName}</div>`;
                }
                
                // Adding the flight DOM to the result
                res += `<b>${fly.getName()}</b><div class="contents global-state-vert">${str}<button name="${fly.getName()}" class="flightBack">back</button></div>`;
            }

            // Assigning result to the panel DOM
            this.infoPanel.innerHTML = res;

            // Assign event processing for the `back` button of flights
            const buttons = document.getElementsByClassName('flightBack') as HTMLCollectionOf<HTMLButtonElement>;
            for (const button of buttons) {
                button.onclick = (event) => {
                    this.flights.forEach((fly) => {
                        fly.goBack(button.name);
                    });
                }
            }
        }
    }

    // Notifies all the flights in the pool
    notifyAllFlights(message: Message) {
        this.airTrafficControl.logNessage(message);
        this.flights.forEach((flight) => {
            flight.confirmation(message);            
        });
    }
}