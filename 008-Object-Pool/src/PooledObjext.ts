/*
    `PooledObject` class implements objects for pooling
*/

export default class PooledObject {
    public tempData: string;
    public result: boolean|undefined;

    constructor(name: string = '') {
        this.tempData = `New ${name}`;
    }

    // Resets object attributes
    public reset() {
        this.tempData = "Released";
        this.result = undefined;
    }

    // Returns sting representation of object
    public stringify() {
        return `${this.tempData} (${this.result})`;
    }

    // Runs object job to get true/false result
    public run(): void {
        if (Math.random() < 0.5) {
            this.result = true;
        } else {
            this.result = false;
        }
    }
}