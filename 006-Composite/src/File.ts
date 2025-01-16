import Component from "./Component";
import Folder from "./Folder";

/*
    File class implements the Component interfacse and represents individual
    component in the File System
*/

export default class File implements Component {
    public name: string;
    public size: number;
    public location: Folder|null;

    constructor(name: string, size: number, location: Folder|null = null) {
        this.name = name;
        this.size = size;
        this.location = location;
        if (this.location !== null) {
         this.location.add(this);
        }
    }
  
    // Defines common method for output
    print() {
        var res: string[] = [];
        res.push(`<span class="file">${this.location?.getPath()}/${this.name}</span><span class="size">[${this.size} KB]</span>`);
        // console.log(res);
        return res;
    }
  
    // Defines common method for getting file size
    getSize() {
        return this.size;
    }

    // Sets file location (when it is not give one on creation)
    setLocation(location: Folder) {
        this.location = location;
    }
}