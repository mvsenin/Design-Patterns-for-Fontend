import Flight from "./Flight";

/**
 * `FlightState` descibes parental class for flight states
 */
export class FlightState {
    // Reference to the flight
    flight: Flight;

    // State name
    public name: string;

    constructor(flight: Flight) {
        this.flight = flight;
    }

    // Moves to next state, if any
    goAhead() {}

    // Moves to previous state, if any
    goBack(name: string): boolean {
        return (this.name === name);
    }

    // Returns state string presentation
    getPresentation(): string {
        return this.name;
    }
}

/**
 * Flight state classes implement state transition logic via goAhead()
 * and goBack() methods
 */
export class FlightStateTaxiForTakeOff extends FlightState {
    constructor(flight: Flight) {
        super(flight);
        this.name = 'taxi for take off';
    }
    
    goAhead() {
        this.flight.setState(this.flight.flightStateReadyForTakeOff);
    }

    goBack(name: string): boolean {
        return (this.name === name);
    }
}

export class FlightStateReadyForTakeOff extends FlightState {
    constructor(flight: Flight) {
        super(flight);
        this.name = 'ready for take off';
    }
    
    goAhead() {
        this.flight.setState(this.flight.flightStateTakeOff);
    }

    goBack(name: string): boolean {
        if (this.flight.getName() === name) {
            this.flight.setState(this.flight.flightStateTaxiForTakeOff);
            return true;
        } else {
            return false;
        }
    }
}

export class FlightStateTakeOff extends FlightState {
    constructor(flight: Flight) {
        super(flight);
        this.name = 'climbing';
    }
    
    goAhead() {
        this.flight.setState(this.flight.flightStateCruise);
    }

    goBack(name: string): boolean {
        if (this.flight.getName() === name) {
            this.flight.setState(this.flight.flightStateApproach);
            return true;
        } else {
            return false;
        }
    }
}

export class FlightStateCruise extends FlightState {
    constructor(flight: Flight){
        super(flight);
        this.name = 'took the cruise height';
    }
    
    goAhead() {
        this.flight.setState(this.flight.flightStateApproach);
    }

    goBack(name: string): boolean {
        if (this.flight.getName() === name) {
            this.flight.setState(this.flight.flightStateApproach);
            return true;
        } else {
            return false;
        }
    }
}

export class FlightStateApproach extends FlightState {
    constructor(flight: Flight){
        super(flight);
        this.name = 'approaching the airport';
    }
    
    goAhead() {
        this.flight.setState(this.flight.flightStateLanding);
    }

    goBack(name: string): boolean {
        if (this.flight.getName() === name) {
            this.flight.setState(this.flight.flightStateCruise);
            return true;
        } else {
            return false;
        }
    }
}

export class FlightStateLanding extends FlightState {
    constructor(flight: Flight){
        super(flight);
        this.name = 'landing';
    }
    
    goAhead() {
        this.flight.setState(this.flight.flightStateLanded);
    }

    goBack(name: string): boolean {
        if (this.flight.getName() === name) {
            this.flight.setState(this.flight.flightStateCruise);
            return true;
        } else {
            return false;
        }
    }
}

export class FlightStateLanded extends FlightState {
    constructor(flight: Flight){
        super(flight);
        this.name = 'landed on runway 1';
    }

    goBack(name: string): boolean {
        if (this.flight.getName() === name) {
            this.flight.setState(this.flight.flightStateTaxiForTakeOff);
            this.flight.startFlight();
            return true;
        } else {
            return false;
        }
    }
}