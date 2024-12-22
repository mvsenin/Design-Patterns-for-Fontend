/*
* The module describes the Facade class which hides the system implementation details from the client
*/

// Import composed system
import {SubsystemA, SubsystemB, SubsystemC} from "./system.js"

// Facade class uses system components via its interface common to all the system versions
export class Facade {
    constructor() {
        this.subsystemA = new SubsystemA();
        this.subsystemB = new SubsystemB();
        this.subsystemC = new SubsystemC();
    }

    commonLogInterface() {
        console.log(this.subsystemA.method());
        console.log(this.subsystemB.method());
        console.log(this.subsystemC.method());
    }
    commonIngoInterface() {
        return this.subsystemA.method() + '<br>' + this.subsystemB.method() + '<br>' + this.subsystemC.method();
    }
}

const facade = new Facade();

export default facade;