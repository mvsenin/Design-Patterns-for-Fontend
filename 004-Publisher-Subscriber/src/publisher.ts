import Subscriber from "./subscriber";

/*
    Subscriber class
*/
class Publisher {
    // Empty list of events
    private events = {};

    // Subscribes a callback object to named event
    subscribe(eventName: any, subscriber: Subscriber) {
        if (!this.events[eventName]) {
                // If the event doesn't exist yet, initialize it as an empty array
                this.events[eventName] = [];
        }

        // Push the callback object into the array of callbacks for the given event
        this.events[eventName].push(subscriber);
    }

    // Unsubscribes from an event
    public unsubscribe(event: string, subscriber: Subscriber): void {
        if (!this.events[event]) return;

        this.events[event] = this.events[event].filter(l => l !== subscriber);
        subscriber.finalize();
    }

    // Emmits name event with mandatory data and optional UI element
    publish(event: any, data: any, publisherContainer?: HTMLElement) {
        // If the event doesn't exist, or there's no subscribers for this event, return
        if (!this.events[event]) {
            return;
        }

        // For each subscriber of this event, call the callback function with
        // the provided data and optional UI element
        this.events[event].forEach((subscriber: Subscriber) => {
            subscriber.callback(data, publisherContainer);
        });
    }
}

export default Publisher;