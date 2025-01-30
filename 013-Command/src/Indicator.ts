/**
 * `Indicator` implements indicator class including UI
 */

export default class Indicator {
    // Indicator attributes
    private active: boolean;
    private form: string;
    private color: string;

    // UI panel to draw indicator is needed
    private panel: HTMLElement|undefined;

    constructor(form: string = '', color: string = '') {
        this.active = false;
        this.form = form;
        this.color = color;
        this.panel = undefined;
    }

    on() {
        this.active = true;
    }

    off() {
        this.active = false;
    }

    setForm(form: string) {
        this.form = form;
    }

    setColor(color: string) {
        this.color = color;
    }

    // Sets UI panel elements
    UI_SetPanel(panel: HTMLElement) {
        this.panel = panel;
    }

    // Draws indicator as per its attributes
    UI_Draw() {
        if (this.panel !== undefined) {
            if (this.active) {
                this.panel.classList.remove('hidden');
            } else {
                this.panel.classList.add('hidden');
            }
            console.log('UI_Draw()', this.form);
            switch (this.form) {
                case 'square': {
                    this.panel.innerHTML = `
                    <svg viewbox="0 0 200 200">
                    <rect x="0" y="0" width="200" height="200" style="stroke: #000000; fill: ${this.color};"></rect>
                    </svg>
                    `
                    break;
                }
                case 'circle': {
                    this.panel.innerHTML =`
                    <svg viewbox="0 0 200 200">
                    <circle r="99" cx="100" cy="100" fill="${this.color}" stroke="#000000" stroke-width="1"/>
                    </svg>
                    `
                    break;
                }
                case 'triangle': {
                    this.panel.innerHTML =`
                    <svg viewbox="0 0 200 200">
                    <polygon points="100,0 0,200 200,200" style="fill: ${this.color}; stroke: #000000; stroke-width: 1;"/>
                    </svg>
                    `
                }
                default: {
                    break;
                }
            }
        }
    }

}