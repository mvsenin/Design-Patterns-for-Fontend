/*
 * The module describes the Facade class which hides the system implementation details from the client
 */

// Import composed system
import { SubsystemA, SubsystemB, SubsystemC } from "./system.js";

// Facade class uses system components via its interface common to all the system versions
export class Facade {
  constructor(a = SubsystemA, b = SubsystemB, c = SubsystemC) {
    this.subsystemA = new a();
    this.subsystemB = new b();
    this.subsystemC = new c();
  }

  commonLogInterface() {
    console.log(this.subsystemA.method());
    console.log(this.subsystemB.method());
    console.log(this.subsystemC.method());
  }

  commonInfoInterface() {
    return (
      this.subsystemA.method() +
      "<br>" +
      this.subsystemB.method() +
      "<br>" +
      this.subsystemC.method()
    );
  }
}

const facade = new Facade();

// DBG: you can combine subsystems as you need
// const facade = new Facade(SubsystemB, SubsystemC, SubsystemA);

export default facade;