// Subsystems of the systen
export enum EventSubsystem {
    BIOS = "BIOS",
    HDD = "HDD",
    RAM = "RAM",
    ROM = "ROM",
    CPU = "CPU",
    OS = "OS",
    Application = "Application",
    Driver = "Driver",
    Database = "Database",
}

// Log event statuses
export enum EventStatus {
    Warning = "Warning",
    Error = "Error",
    CritialError = "CritialError",
}

export function getRandomEnum(en: any): number {
    const index = Math.floor(Math.random() * Object.keys(en).length);
    const value: string = <string>Object.values(en)[index];
    return en[value];
}

/*
    `LogEvent` implements log event class
*/
export default class LogEvent {
    private Subsystem: EventSubsystem;
    private Status: EventStatus;
    private Message: string

    constructor(Subsystem: EventSubsystem, Status: EventStatus, Message: string = '') {
        this.Subsystem = Subsystem;
        this.Status = Status;
        this.Message = Message;
    }

    public getStatus(): EventStatus {
        return this.Status;
    }

    public getSubsystem(): EventSubsystem {
        return this.Subsystem;
    }

    public getMessage(): string {
        return this.Message;
    }

    public getDescription(): string {
        var log: string;
        log = `${this.Status}: ${this.Message} with ${this.Subsystem}`;
        return log;
    }
}