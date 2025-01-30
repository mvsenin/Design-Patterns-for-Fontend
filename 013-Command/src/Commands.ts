import Indicator from "./Indicator";

/**
 * `Command` interface is common for all commands
 */
export interface Command {
    indicator: Indicator;

    execute(attributes: string|undefined): void;
}

/**
 * `CommandOn` implements 'On' command
 */
export class CommandOn implements Command {
    indicator: Indicator;

    constructor(indicator: Indicator) {
        this.indicator = indicator;
    }

    execute(): void {
        this.indicator?.on();
    }
}

/**
 * `CommandOff` implements 'Off' command
 */
export class CommandOff implements Command {
    indicator: Indicator;

    constructor(indicator: Indicator) {
        this.indicator = indicator;
    }

    execute(): void {
        this.indicator.off();
    }
}

/**
 * `CommandChangeForm` implements 'Change form' command
 */
export class CommandChangeForm implements Command {
    indicator: Indicator;

    constructor(indicator: Indicator) {
        this.indicator = indicator;
    }

    execute(form: string): void {
        this.indicator.setForm(form);
    }
}

/**
 * `CommandChangeColor` implements 'Change color' command
 */
export class CommandChangeColor implements Command {
    indicator: Indicator;

    constructor(indicator: Indicator) {
        this.indicator = indicator;
    }

    execute(color: string): void {
        this.indicator.setColor(color);
    }
}