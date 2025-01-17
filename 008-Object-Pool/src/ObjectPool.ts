/*
    `ObjectPool` class implements pool of objects
*/

import PooledObject from "./PooledObjext";

export default class ObjectPool {
    private available: PooledObject[] = [];
    private inUse: PooledObject[] = [];

    constructor(initialSize: number) {
        for (let i = 0; i < initialSize; i++) {
            this.available.push(new PooledObject(String(i)));
        }
    }

    // Moves object from available pool to in use one
    public acquire(): PooledObject {
        if (this.available.length > 0) {
            const obj = this.available.pop()!;
            this.inUse.push(obj);
            return obj;
        } else {
            // Optionally create a new object if the pool is empty
            const newObj = new PooledObject('Extra');
            this.inUse.push(newObj);
            return newObj;
        }
    }

    // Moves onbject from pool in use to available one
    public release(obj: PooledObject): void {
        const index = this.inUse.indexOf(obj);
        if (index > -1) {
            this.inUse.splice(index, 1);
            obj.reset(); // Reset the object before returning it to the pool
            this.available.push(obj);
        }
    }

    // Runs each object
    public run(): void {
        this.inUse.forEach((obj) => {
            obj.run();
        })
    }

    // Returns stinrg representation of an array
    private stringifyArray(array: PooledObject[]): string {
        var res: string = '';
        array.forEach((obj) => {
            res += obj.stringify() + '<br>';
        })
        return res;
    }
    
    // Returns stinrg representation of the available pool
    public stringifyAvailable(): string {
        return this.stringifyArray(this.available);
    }

    // Returns stinrg representation of the in use pool
    public stringifyInUse() {
        return this.stringifyArray(this.inUse);
    }

    // Returns size (length) of the available pool
    public getAvailableSize() {
        return this.available.length;
    }

    // Returns size (length) of the in use pool
    public getInUseSize() {
        return this.inUse.length;
    }
}