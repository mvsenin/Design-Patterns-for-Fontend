// The Singleton instance
let instance;

// The Singleton state data
let globalState = {
    color: "#ff0000",
    dt: new Date()
};

// The Signleton class
export class StateUtility {
    constructor() {
        // This is ES6 approach, no need for Object.freeze()
        if (instance) {
            // Throw the error in case of multiple tries
            throw new Error("New instance cannot be created!!");
            // DBG: OR you can return the instance in order to avoid exception
            // return instance;
        }

        instance = this;
    }

    getPropertyByName(propertyName) {
        return globalState[propertyName];
    }

    setPropertyValue(propertyName, propertyValue) {
        globalState[propertyName] = propertyValue;
    }
}

// Singleton object instantiation

// Object.freeze() is necessary for ES5
// let stateUtilityInstance = Object.freeze(new StateUtility());

let stateUtilityInstance = new StateUtility();

// DBG: uncomment to test multiple Singleton creation
// export let stateUtilityInstanceTest = Object.freeze(new StateUtility());
// console.log('DBG - stateUtilityInstanceTest');
// console.log(stateUtilityInstanceTest);

export default stateUtilityInstance;