import LogEvent, { EventStatus, EventSubsystem, getRandomEnum } from "./LogEvent";
import { DBLogger, HardwareLogger, SoftwareLogger } from "./LogHandlers";

// Getting UI elements
var outEvents = document.getElementById('Events') as HTMLElement;
var btnTest = document.getElementById('btnTest') as HTMLButtonElement;
var outLogs = document.getElementById('Logs') as HTMLElement;
var showAlerts = document.getElementById('showAlerts') as HTMLInputElement;

// Creating loggers
var hwLogger = new HardwareLogger();
var swLogger = new SoftwareLogger();
var dbLogger = new DBLogger();

// Creating logger chain
hwLogger.setNextLogger(swLogger);
swLogger.setNextLogger(dbLogger);

// Generate random event
function generateEvent(): LogEvent {
    var subsystem = EventSubsystem[getRandomEnum(EventSubsystem)];
    var status = EventStatus[getRandomEnum(EventStatus)];
    return new LogEvent(
        subsystem
        , status
        , ([EventSubsystem.BIOS, EventSubsystem.CPU, EventSubsystem.HDD, EventSubsystem.RAM, EventSubsystem.ROM].includes(subsystem) ?
            'There is i/o problem'
            : 'There is memory problem'
            ));
}

// Button processing
btnTest.onclick = (event) => {
    var logEvent = generateEvent();
    
    outEvents.innerHTML += `<p class="${logEvent.getStatus()}">${JSON.stringify(logEvent)}</p>`;
    outEvents.scrollTop = outEvents.scrollHeight;
    console.log(showAlerts.checked);
    hwLogger.logEvent(logEvent, showAlerts.checked);

    outLogs.innerHTML += `<p class="${logEvent.getStatus()}">${logEvent.getDescription()}</p>`;
    outLogs.scrollTop = outLogs.scrollHeight;
}