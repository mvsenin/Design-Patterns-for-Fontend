import { CommandChangeColor, CommandChangeForm, CommandOff, CommandOn } from "./Commands";
import Indicator from "./Indicator";
import Invoker from "./Invoker";

// Getting UI elements
var command = document.getElementById('command') as HTMLSelectElement;
var sendCommand = document.getElementById('sendCommand') as HTMLButtonElement;
var commandChangeForm = document.getElementById('commandChangeForm') as HTMLSelectElement;
var commandChangeColor = document.getElementById('commandChangeColor') as HTMLSelectElement;
var indicatorPanel = document.getElementById('indicator') as HTMLElement;

// Creating commands
const indicator = new Indicator(commandChangeForm.value, commandChangeColor.value);
indicator.UI_SetPanel(indicatorPanel);
const invoker = new Invoker();

const on = new CommandOn(indicator);
const off = new CommandOff(indicator);
const changeForm = new CommandChangeForm(indicator);
const changeColor = new CommandChangeColor(indicator);

// Processing command selection - show/hide command attribute value selection
command.onchange = (event) => {
    for (const el of document.getElementsByTagName('select')) {
        if (el.id !== 'command') {
            if (command.value === el.id) {
                el.hidden = false;
            } else {
                el.hidden = true;
            }
        }
    }
}

// Processing Send command button
sendCommand.onclick = (event) => {
    var draw: boolean = true;

    switch (command.value) {
        case 'commandOn': {
            invoker.setCommand(on);
            invoker.executeCommand();
            break;
        }
        case 'commandOff': {
            invoker.setCommand(off);
            invoker.executeCommand();
            break;
        }
        case 'commandChangeForm': {
            invoker.setCommand(changeForm);
            invoker.executeCommand(commandChangeForm.value);
            break;
        }
        case 'commandChangeColor': {
            invoker.setCommand(changeColor);
            invoker.executeCommand(commandChangeColor.value);
            break;
        }
        default: {
            draw = false;
            break;
        }
    }

    if (draw) {
        console.log(indicator);
        indicator.UI_Draw();
    }
}