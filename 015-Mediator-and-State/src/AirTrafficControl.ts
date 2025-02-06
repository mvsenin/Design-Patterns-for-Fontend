import Message from "./Message";
import Flight from "./Flight";
import FlightControlPanel from "./FlightControlPanel";

/**
 * `AirTrafficControl` class describes the mediator class - a control center
 * of the air traffic
 */
export default class AirTrafficControl {
    // Control center panel for logs
    private airTrafficControlPanel: HTMLElement|undefined;

    // Flight control panel
    private trafficPanel: FlightControlPanel;

    // Pool of messages sent/recieved by the control center
    private messages: Message[];

    constructor(trafficPanel: FlightControlPanel, airTrafficControlPanel?: HTMLElement) {
        this.trafficPanel = trafficPanel;
        this.airTrafficControlPanel = airTrafficControlPanel;
        this.messages = [];
    }

    // Logs message on the control center panel
    logNessage(message: Message) {
        var css = '';

        if (message.from === 'Tower') {
            css = ' class="right"';
        }
        this.messages.push(message);

        if (this.airTrafficControlPanel !== undefined) {
            this.airTrafficControlPanel.innerHTML += `<div${css}><span class="small">${new Date().toLocaleString()} </span><b>${message.from}:</b> ${message.to}, ${message.message}${message.confirmation !== '' ? ', ' + message.confirmation : ''}</div>`;
            this.airTrafficControlPanel.scrollTop = this.airTrafficControlPanel?.scrollHeight;
        }
    }

    // Processes flight's requests for take off and asks for confirmation
    requestTakeoff(flight: Flight, message: Message) {
        this.logNessage(message);
        const response = new Message(
                    'Tower'
                    , flight.getName()
                    , `turn right heading 2, runway 1 cleared for takeoff, change to departure`
                    , `climb to 6000 feet`);
        this.logNessage(response);
        flight.confirmation(response);
        this.trafficPanel.update();
    }

    // Processes flight's requests for landing and asks for confirmation
    requestLanding(flight: Flight, message: Message) {
        this.logNessage(message);
        const response = new Message(
                    'Tower'
                    , flight.getName()
                    , `wind 90 degrees, 10 knots`
                    , `cleared to land runway 1`);
        this.logNessage(response);
        flight.confirmation(response);
        this.trafficPanel.update();
    }

    // Processes flight's messages and asks for confirmation in dedicated cases
    inform(flight: Flight, message: Message) {
        // Message part to be confirmed
        var confirmation = '';

        // Cases for asking for confirmation
        switch (flight.getState()) {
            case flight.flightStateApproach: {
                confirmation = 'wind 270 degrees ten knots';
                break;
            }
            case flight.flightStateLanded: {
                confirmation = 'approach gate 2';
                break;
            }
        }

        // Logging the message
        this.logNessage(message);
        const response = new Message(
                    'Tower'
                    , flight.getName()
                    , `roger, ${message.message}`
                    , confirmation);
        this.logNessage(response);

        // Either ask flight for conformation and just response to the flight
        if (confirmation !== '') {
            flight.confirmation(response);
        } else {
            flight.response(response);
        }

        this.trafficPanel.update();
    }

    // Processes flight's conformation of the message
    confirm(flight: Flight, message: Message) {
        // Logging the message
        this.logNessage(message);
        // flight.confirmation(message);
    }
}
