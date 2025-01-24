/**
 * Abstract theme class and concrete classes to be used in user accounts
 */
export abstract class Theme {
    protected bgColor: string;

    setBgColor(bgColor: string) {
        this.bgColor = bgColor;
    }

    updateCss(cssClass: string) {
        let shand = document.getElementsByClassName(cssClass) as HTMLCollectionOf<HTMLElement>;
        if (shand.length != 0) {
            shand[0].style.background = this.bgColor;
        }
    }
}

export class YelloTheme extends Theme {
    constructor() {
        super();
        this.bgColor = '#ffffcb';
    }
}

export class GreenTheme extends Theme {
    constructor() {
        super();
        this.bgColor = '#cbffd2';
    }
}

export class RedTheme extends Theme {
    constructor() {
        super();
        this.bgColor = '#ffcbcb';
    }
}