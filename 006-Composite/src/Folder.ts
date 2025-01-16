import Component from "./Component";
import File from "./File";

/*
    The Folder class represents the `Composite` class whose purpose is to hold
    the leaf classes and define methods to `add`, `delete` and manipulate
    the hierarchy.
*/
export default class Folder implements Component {
    public name: string;
    private files: Component[];
    private parent: Folder|null;

    constructor(name: string, parent: Folder|null = null) {
        this.name = name;
        this.files = [];
        this.parent = parent;
        if (this.parent !== null) {
            this.parent.add(this);
        }
    }
  
    // Adds a subcomponent to the hierachy
    add(file: Component) {
        if (file.constructor.name === 'File') {
            (file as File).setLocation(this);
        }
        if (file.constructor.name === 'Folder') {
            (file as Folder).parent = this;
        }
        this.files.push(file);
    }
  
    // Deletes a subcomponent from the hierachy
    delete(file: Component) {
        const index = this.files.indexOf(file);
        if (index !== -1) {
            this.files.splice(index, 1);
        }
    }
  
    // Defines common method for output
    print() {
        var res: string[] = [];
        
        res.push(`<span class="folder">${this.getPath()}</span><span class="size">[${this.getSize()} KB]</span>`);

        this.files.forEach((file) => {
            res.push(...file.print());
        });

        return res;
    }

    // Generated folder list
    ls() {
        var res: Folder[] = [];
        res.push(this);
        this.files.forEach((file) => {
            if (file.constructor.name === 'Folder') {
                var ls = (file as Folder).ls();
                if (ls.length > 1) {
                    ls.forEach((f) => {res.push(f)});
                } else {
                    res.push(file as Folder);
                }
            }
        });
        return res;
    }

    // Defines common method for getting folder size
    getSize() {
        var totalSize: number = 0;

        this.files.forEach((file) => {
            totalSize += file.getSize();
        });

        console.log(`Folder "${this.name}" size: ${totalSize}`);
        
        return totalSize;
    }

    // Returns folder's position in the hierachy (full path)
    getPath() {
        var path: string = this.name;
        var levelUp = this.parent;

        while (levelUp !== null) {
            path = levelUp.name + (levelUp.name !== "/" ? "/": "") + path; 
            levelUp = levelUp.parent;
        }
        return path;
    }

    // Returns a folder object by its path, in any
    findFolder(path: string): Folder|null {
        var res: Folder|null = null;
       
        console.log('');
        console.log('findFolder | path = ' + path);
        
        if (this.getPath() === path) {
            return this;
        }
        
        console.log(`findFolder | no "${this.getPath()}" folder`);

        this.files.forEach((file) => {
            console.log(`forEach ${file} - (${this.getPath()})`);
            if (file.constructor.name === 'Folder') {
                if ((file as Folder).getPath() === path) {
                    console.log(`${file.constructor.name} && ${(file as Folder).getPath()} === ${path}`)
                    console.log(`FOLDER FOUND (${this.getPath()})`);
                    res = (file as Folder);
                } else if (res === null) {
                    console.log(`FOLDER NOT FOUND (${this.getPath()})`);
                    res = (file as Folder).findFolder(path);
                }
            }
        });
        
        console.log(`findFolder | files ${this.files}`);
        
        return res;
    }
  }