import LogEvent from "./LogEvent";

/*
    `SystemLog` interface describes logging system handler
*/
export default interface SystemLog {
    
    // To set next handler
    setNextLogger(Logger: SystemLog): void;

    // To log an event
    logEvent(Event: LogEvent): void;
}