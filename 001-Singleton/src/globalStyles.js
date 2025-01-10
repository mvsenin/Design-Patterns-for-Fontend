// The Signleton class
export class StateUtility {
    // Static class property for the Singleton instance
    static _instance = null;

    // Provate Singleton properties
    _color = "#000000";
    _date = new Date();

    constructor() {
        // This is ES6 approach, no need for Object.freeze()
        if (StateUtility._instance) {
            // DBG: Throw the error in case of multiple tries
            // throw new Error("New instance cannot be created!!");
            // OR you can return the instance in order to avoid exception
            return StateUtility._instance;
        }

        StateUtility._instance = this;
        return StateUtility._instance;
    }

    // Returns object property value
    getPropertyByName(propertyName) {
        const key = Object.keys(this).find(value => value.includes(propertyName));
        if (key) {
            return this[key];
        } else {
            throw new Error("No such property - " + propertyName);
        }
    }

    // Sets object propetry value
    setPropertyValue(propertyName, propertyValue) {
        const key = Object.keys(this).find(value => value.includes(propertyName));
        if (key) {
            this[key] = propertyValue;
        } else {
            throw new Error("No such property - " + propertyName);
        }
    }
}

// Singleton object instantiation

// DBG: Object.freeze() makes the object read-only
// let stateUtilityInstance = Object.freeze(new StateUtility());

let stateUtilityInstance = new StateUtility();

// DBG: uncomment to test multiple Singleton creation
// stateUtilityInstance.setPropertyValue("color", "#000000");
// export let stateUtilityInstanceTest = new StateUtility();
// console.log('DBG - stateUtilityInstanceTest');
// console.log(stateUtilityInstanceTest);
// stateUtilityInstanceTest.setPropertyValue("color", "#0000ff")
// console.log(stateUtilityInstanceTest);

export default stateUtilityInstance;