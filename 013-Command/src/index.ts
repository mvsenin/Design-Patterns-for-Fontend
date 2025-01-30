import { CommandChangeColor, CommandChangeForm, CommandOff, CommandOn } from "./Commands";
import Indicator from "./Indicator";
import Invoker from "./Invoker";

// Getting UI elements
var command = document.getElementById('command') as HTMLSelectElement;
var sendCommand = document.getElementById('sendCommand') as HTMLButtonElement;
var commandChangeForm = document.getElementById('CommandChangeForm') as HTMLSelectElement;
var commandChangeColor = document.getElementById('CommandChangeColor') as HTMLSelectElement;
var indicatorPanel = document.getElementById('indicator') as HTMLElement;
var info = document.getElementById('info') as HTMLElement;

// Creating commands
const indicator = new Indicator(commandChangeForm.value, commandChangeColor.value);
indicator.UI_SetPanel(indicatorPanel);
const invoker = new Invoker();

const on = new CommandOn(indicator);
const off = new CommandOff(indicator);
const changeForm = new CommandChangeForm(indicator);
const changeColor = new CommandChangeColor(indicator);

function updateInfo() {
    var res: string[] = [];
    if (command.value !== '') {
        for (const el of document.getElementsByTagName('select')) {
            if (el.id !== 'command') {
                res.push(`${el.id}() attribute = '${el.value}'`);
            } else {
                if (el.value !== '') {
                    var attr = el.value === 'apply' ? ` sequence of 'Change form' and 'Change color' commands` : '()';
                    res.push(`commmand: ${el.value}${attr}`);
                } else {
                    res = [];
                }
            }
        }
    }
    info.innerHTML = res.join('<br>');
}

// Processing command selection - show/hide command attribute value selection
command.onchange = (event) => {
    for (const el of document.getElementsByTagName('select')) {
        if (el.id !== 'command') {
            if (command.value === el.id) {
                el.hidden = false;
                el.onchange = (event) => {
                    updateInfo();
                }
            } else {
                el.hidden = true;
            }
        }
    }
    updateInfo();
}

// Processing Send command button
sendCommand.onclick = (event) => {
    var draw: boolean = true;
    switch (command.value) {
        case 'CommandOn': {
            invoker.setCommand(on);
            invoker.executeCommand();
            break;
        }
        case 'CommandOff': {
            invoker.setCommand(off);
            invoker.executeCommand();
            break;
        }
        case 'CommandChangeForm': {
            invoker.setCommand(changeForm);
            invoker.executeCommand(commandChangeForm.value);
            break;
        }
        case 'CommandChangeColor': {
            invoker.setCommand(changeColor);
            invoker.executeCommand(commandChangeColor.value);
            break;
        }
        case 'apply': {
            invoker
                .setCommand(changeForm).executeCommand(commandChangeForm.value)
                .setCommand(changeColor).executeCommand(commandChangeColor.value);
            break;
        }
        default: {
            draw = false;
            break;
        }
    }

    if (draw) {
        indicator.UI_Draw();
    }
}