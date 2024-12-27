class Observer {

    name : String;

    constructor(name : String) {
        // Store the name of the observer
        this.name = name;
    }
    
    // Method called when the display is updated with sensor event
    logInfo(measure : any, toUpdate: Boolean) {
        if (toUpdate) {
            // Log a message indicating the name of the display and the temperature
            console.log(`${this.name} Display: Sensor value is ${measure}`);
        }
    }

    // Method called when the display is updated with sensor event
    showInfo(measure : any, infoPanel : HTMLSpanElement, toUpdate: Boolean) {
        var value = measure;
        if (!toUpdate) {
            value = 'NO SIGNAL';
        }
        // Log a message indicating the name of the display and the temperature
        infoPanel.innerHTML = infoPanel.innerHTML.concat(`<div class="observer">${this.name}<p>${value}</p></div>`);
    }
}

export default Observer;