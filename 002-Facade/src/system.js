/*
* The module composes the system from subsystems.
* New subsystems/components can be added here and won't affect the Facade interface class
*/

// DBG Case 1: get full subsystem one
// import {SubsystemA, SubsystemB, SubsystemC} from "./subsystemOne.js"


// DBG Case 2: get full subsystem two
// import {SubsystemA, SubsystemB, SubsystemC} from "./subsystemTwo.js"


// DBG Case 3: mix subsystems one and two
import {SubsystemA, SubsystemC} from "./subsystemOne.js"
import {SubsystemB} from "./subsystemTwo.js";


export {SubsystemA, SubsystemB, SubsystemC};