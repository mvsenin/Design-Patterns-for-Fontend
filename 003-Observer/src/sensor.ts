import Observer from "./observer";

class Sensor {

    observers : Observer[] = [];
    value : any;
    name : String;
    infoPanel : HTMLSpanElement;

    constructor(name : String, infoPanel : HTMLSpanElement) {
        // Initialize an empty array to hold observers
        this.observers = [];
        // Initialize the value to 0
        this.value = 0;
        // Set sensor's name
        this.name = name;
        // Store info panel reference
        this.infoPanel = infoPanel;
    }
  
    // Returns number of observers
    getNoOfObeserver() {
        return this.observers.length;
    }

    // Adds an observer to the list
    addObserver(observer : Observer) {
        this.observers.push(observer);
        this.setValue(this.value);
    }
  
    // Removes an observer from the list
    removeObserver(observer : Observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }
  
    // Sets the sensor value and notifies observers
    setValue(value : any) {
        this.value = value;
        this.notifyObservers();
        if (this.observers.length == 0 && this.infoPanel != null) {
            this.infoPanel.innerHTML = 'No monitor exists';
        }
    }
  
    // Notifies all observers about the temperature change
    notifyObservers(toNotify : String = 'all') {
        this.observers.forEach((observer, index) => {
            // Calc update flag
            var toUpdate = (toNotify == 'all')
                || (toNotify == 'odd' && index % 2 == 0)
                || (toNotify == 'even' && index % 2 == 1);
            // Call the update method on each observer
            observer.logInfo(this.value, toUpdate);
            if (this.infoPanel != null) {
                observer.showInfo(this.value, this.infoPanel, toUpdate);
            }
        });
    }
  }
  
  export default Sensor;