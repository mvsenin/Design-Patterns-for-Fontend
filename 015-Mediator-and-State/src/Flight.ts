import AirTrafficControl from "./AirTrafficControl";
import { FlightState, FlightStateTaxiForTakeOff, FlightStateTakeOff, FlightStateCruise, FlightStateApproach, FlightStateLanding, FlightStateLanded, FlightStateReadyForTakeOff } from "./FlightStates";
import Message from "./Message";

/**
 * `Flight` class describes the colleague class - a flight of a plane
 */
export default class Flight {
    // Flight attributes
    private name: string;
    private airTrafficControl: AirTrafficControl;
    private messages: Message[];
    public seconds: number;
    
    // Current flight state
    private currentState: FlightState;

    // Possible flight states
    public flightStateTaxiForTakeOff: FlightStateTaxiForTakeOff;
    public flightStateReadyForTakeOff: FlightStateReadyForTakeOff;
    public flightStateTakeOff: FlightStateTakeOff;
    public flightStateCruise: FlightStateCruise;
    public flightStateApproach: FlightStateApproach;
    public flightStateLanding: FlightStateLanding;
    public flightStateLanded: FlightStateLanded;

    constructor(name: string, airTrafficControl: AirTrafficControl, seconds: number = 3) {
        this.name = name;
        this.airTrafficControl = airTrafficControl;
        this.messages = [];

        this.flightStateTaxiForTakeOff = new FlightStateTaxiForTakeOff(this);
        this.flightStateReadyForTakeOff = new FlightStateReadyForTakeOff(this);
        this.flightStateTakeOff = new FlightStateTakeOff(this);
        this.flightStateCruise = new FlightStateCruise(this);
        this.flightStateApproach = new FlightStateApproach(this);
        this.flightStateLanding = new FlightStateLanding(this);
        this.flightStateLanded = new FlightStateLanded(this);
      
        this.seconds = seconds;

        // Setting initial flight state
        this.setState(this.flightStateTaxiForTakeOff);
    }

    // Returns flight string name
    getName() {
        return this.name;
    }

    // Emits take off request to control center
    requestTakeoff() {
        if (this.currentState === this.flightStateReadyForTakeOff) {
            const message = new Message(this.name, 'Tower', `lining up runway 1, fully ready for departure.`);
            this.messages.push(message);
            this.airTrafficControl.requestTakeoff(this, message);
        } else {
            console.log('The flight is not ready for take off');
        }
    }

    // Emits landing request to control center
    requestLanding() {
        if (this.currentState === this.flightStateApproach) {
            const message = new Message(this.name, 'Tower', `on final runway 1`);
            this.messages.push(message);
            this.airTrafficControl.requestLanding(this, message);
        } else {
            console.log('The flight is not ready for landing');
        }
    }

    // Processes response from control senter
    response(message: Message) {
        this.messages.push(message);
    }

    // Processes confirmation requested by control senter
    confirmation(message: Message) {
        this.messages.push(message);

        const confirmation = new Message(this.name, 'Tower', `${message.confirmation}, confirmed, ${this.name}`);
        this.messages.push(confirmation);
        this.airTrafficControl.confirm(this, confirmation);
    }

    // Moves to next flight state
    goAhead() {
        this.currentState.goAhead();

        switch (this.currentState.constructor.name) {
            case 'FlightStateReadyForTakeOff': {
                this.requestTakeoff();
                break;
            }
            case 'FlightStateApproach': {
                this.requestLanding();
                break;
            }
            default: {
                break;
            }
        }
    }

    // Moves to previous flight state
    goBack(name: string) {
        this.currentState.goBack(name);
    }

    // Sets flight state to `state`
    setState(state: FlightState) {
        var addInfo = '';
        
        if (state === this.flightStateApproach) {
            addInfo = ', please update weather';
        }
        
        const message = new Message(this.name, 'Tower', `${state.name}${addInfo}`);
        this.messages.push(message);
        
        this.currentState = state;

        this.airTrafficControl.inform(this, message);
    }

    // Returns flight state
    getState(): FlightState {
        return this.currentState;
    }

    // Starts sequental flight state machine
    public startFlight() {
        if (this.currentState !== this.flightStateLanded) {
            setTimeout(() =>
                {
                    this.goAhead();
                    this.startFlight();
                }
                , Math.floor((Math.random() * 1000 * this.seconds) + 1)
            );
        }
    }
}