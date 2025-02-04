import DocumentState from "./DocumentState";

/**
 * `Document` describes the originator class
 */
export default class Document {
    private content: string|undefined;

    constructor(content: string|undefined) {
        this.content = content;
    }
 
    public createDocumentState(): DocumentState {
        return new DocumentState(this.content);
    }
 
    public restoreDocumentState(memento: DocumentState) {
        this.content = memento.getContent();
    }
 
    public getContent(): string {
        if (this.content !== undefined) {
            return this.content;
        } else {
            return '';
        }
    }

    public setContent(content: string|undefined) {
        this.content = content;
    }
}