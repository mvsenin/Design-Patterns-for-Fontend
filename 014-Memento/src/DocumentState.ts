/**
 * `DocumentState` describes the memento class
 */

export default class DocumentState {
    private content: string|undefined;

    constructor(content: string|undefined) {
        this.content = content;
    }
 
    public getContent() {
        return this.content;
    }
}