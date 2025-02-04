import Document from "./Document";
import DocumentState from "./DocumentState";

/**
 * `Clipboard` describes the caretaker class
 * */ 
export default class Clipboard {
    private history: DocumentState[];
    private index: number;

    constructor() {
        this.history = [];
        this.index = -1;
    }
 
    private inHistory(document: Document): boolean {
        var res = false;
        this.history.forEach((hist) => {
            if (hist.getContent() === document.getContent()) res = true;
        });
        return res;
    }

    public push(document: Document) {
        if (!this.inHistory(document)) {
            this.history.push(document.createDocumentState());
        }
        this.index = this.history.length - 1;
    }
 
    public undo() {
        if (this.history.length === 0) return undefined;
        if (this.index === -1) return undefined;
        this.index--;
        return this.history[this.index];
    }

    public redo() {
        if (this.history.length > 0 && (this.index < (this.history.length - 1))) {
            this.index++;
            return this.history[this.index];
        }
    }

    public getHistory(): DocumentState[] {
        return this.history;
    }

    public getHistoryLength(): number {
        return this.history.length;
    }

    public getHistoryIndex(): number {
        return this.index;
    }
}