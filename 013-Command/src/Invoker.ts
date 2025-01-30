import { Command } from "./Commands";

/**
 * `Invoker` class implements command invoker interface which allows executing
 * any command, based on the `Command` interface
 */
export default class Invoker {
    private command: Command|undefined;

    constructor(command?: Command) {
        this.command = undefined;
      }
    
    setCommand(command: Command) {
        this.command = command;
    }

    executeCommand(attributes?: string|undefined) {
        if (this.command !== undefined) {
            this.command?.execute(attributes);
        }
    }
}