/*
    Subscriber class
*/
class Subscriber {
    public id: string = ""; // subscriber ID
    private message: string = ""; // subscriber message text
    private div: HTMLElement|undefined; // subscriber UI element, if any

    // Generates UID
    private getUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g
            , function(c) {
                    var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
                    return v.toString(16);
                }
            );
    }

    // Constructs new subscriber object
    constructor(message: string) {
        this.message = message;
        this.id = this.getUID();
        console.log("Subscriber '" + this.message + "' [" + this.id
            + "] was created");
    }

    // Callback function of the subscriber
    public callback(data: any, publisherContainer?: HTMLElement): void {
        // If UI elemen provided:
        if (publisherContainer) {
            // If UI element does not exist, create that
            if(this.div === undefined) {
                this.div = document.createElement("div");
                publisherContainer.appendChild(this.div);
            }

            // Set its text
            this.div.textContent = this.message + ": " + data;

            // Update its class
            if (data === "OK") {
                this.div.className = "OK";
            } else {
                this.div.className = "";
            }
        // Else log message to console
        } else {
            console.log(this.message + ": " + data);
        }
    }

    // Class destructor-like method
    public finalize(): void {
        if(this.div !== undefined) {
            this.div.remove();
            this.div = undefined;
        }
    }
}

export default Subscriber;