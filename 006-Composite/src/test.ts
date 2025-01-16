import File from "./File";
import Folder from "./Folder";

// From top to down creation
const root = new Folder('home');

root.print();

const folder1 = new Folder('user1', root);

const file1 = new File('document1.txt', 10, folder1);

console.log('File system structure:');

root.print();


// From down to top creation
const file2 = new File('document2.txt', 10);

const folder2 = new Folder('user2');
folder2.add(file2);
// file2.setLocation(folder2);

root.add(folder2);

console.log('File system structure:');
root.print();