import LogEvent, {EventStatus, EventSubsystem} from "./LogEvent";
import SystemLog from "./SystemLog";

/*
    `HardwareLogger` implementa hardware events logging
*/
export class HardwareLogger {
    private nextLogger: SystemLog;

    public setNextLogger(Logger: SystemLog): void {
        this.nextLogger = Logger;
    }

    public logEvent(Event: LogEvent, showAlerts: boolean = true): void {
        
        if ([EventSubsystem.BIOS, EventSubsystem.CPU, EventSubsystem.HDD, EventSubsystem.RAM, EventSubsystem.ROM].includes(Event.getSubsystem())) {

            if (Event.getStatus() === EventStatus.CritialError && showAlerts) {
                alert('There is critial HW error: "' + Event.getMessage() + ' with ' + Event.getSubsystem() + '"');
            }

            // console.log(Event.getDescription());
        } else if (this.nextLogger != null) {
            this.nextLogger.logEvent(Event);
        }
    }
}

/*
    `HardwareLogger` implementa hardware events logging
*/
export class SoftwareLogger {
    private nextLogger: SystemLog;

    public setNextLogger(Logger: SystemLog): void {
        this.nextLogger = Logger;
    }

    public logEvent(Event: LogEvent, showAlerts: boolean = true): void {
        var log: string;

        if ([EventSubsystem.Application, EventSubsystem.Driver, EventSubsystem.OS].includes(Event.getSubsystem())) {
            log = "SW | " + Event.getSubsystem() + " | " + Event.getStatus() + " | " + Event.getMessage();

            if (Event.getStatus() === EventStatus.CritialError && showAlerts) {
                alert('There is critial SW error: "' + Event.getMessage() + ' with ' + Event.getSubsystem() + '"');
            }

            // console.log(Event.getDescription());
        } else if (this.nextLogger != null) {
            this.nextLogger.logEvent(Event);
        }
    }
}

/*
    `DBLogger` implementa database events logging
*/
export class DBLogger {
    private nextLogger: SystemLog;

    public setNextLogger(Logger: SystemLog): void {
        this.nextLogger = Logger;
    }

    public logEvent(Event: LogEvent, showAlerts: boolean = true): void {
        var log: string;

        if ([EventSubsystem.Database].includes(Event.getSubsystem())) {
            log = "SW | " + Event.getSubsystem() + " | " + Event.getStatus() + " | " + Event.getMessage();

            if (Event.getStatus() === EventStatus.CritialError && showAlerts) {
                alert('There is critial DB error: "' + Event.getMessage() + ' with ' + Event.getSubsystem() + '"');
            }

            // console.log(Event.getDescription());
        } else if (this.nextLogger != null) {
            this.nextLogger.logEvent(Event);
        }
    }
}