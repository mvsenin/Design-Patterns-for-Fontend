/**
 * `Message` class describes message to be sent between flight and control center
 */
export default class Message {
    // Sender
    public from: string;
    
    // Message
    public message: string;

    // Message part to be confirmed
    public confirmation: string;
    
    // Reciever
    public to: string;

    constructor (from: string, to: string, message: string, confirmation?: string) {
        this.from = from;
        this.to = to;
        this.message = message;
        this.confirmation = confirmation !== undefined ? confirmation : '';
    }
}