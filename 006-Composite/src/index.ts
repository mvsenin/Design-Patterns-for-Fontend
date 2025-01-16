import File from "./File";
import Folder from "./Folder";

// Getting UI elements
var destFolderName = document.querySelector("#destFolderName") as HTMLSelectElement;
var outputData = document.querySelector("#output-data") as HTMLSpanElement;
var newFolderName = document.querySelector("#newFolderName") as HTMLInputElement;
var newFileName = document.querySelector("#newFileName") as HTMLInputElement;
var newFileSize = document.querySelector("#newFileSize") as HTMLInputElement;
var addFolderButton = document.querySelector("#addFolderButton") as HTMLButtonElement;
var addFileButton = document.querySelector("#addFileButton") as HTMLButtonElement;

// Filling output and select element with the root folder
var root = new Folder("/");

outputData.innerHTML = root.getPath();

var rootFolder = new Option(root.getPath(), root.getPath());

destFolderName.add(rootFolder);

// Event processing functions
newFolderName.onkeyup = (event) => {
    if (newFolderName.value !== "") {
        addFolderButton.disabled = false;
    } else {
        addFolderButton.disabled = true;
    }
}

function isAddFileDisabled() {
    if (newFileName.value !== "" && newFileSize.value !== "") {
        return false;
    } else {
        return true;
    }    
}

newFileSize.onkeydown = (event) => {
    if (/^([0-9\.])$/.test(event.key) || event.key == "Backspace") {
        return true;
    } else {
        return false;
    }
}

newFileSize.onkeyup = (event) => {
    addFileButton.disabled = isAddFileDisabled();
}

// Updating output info and select element
function updateOutput() {

    // Get folder and full file lists
    var dirLis = root.ls();
    var fullList = root.print();
 
    // Clean and refill select element
    for (var i = destFolderName.length; i--; 0) {
        destFolderName.remove(i);
    }

    if (dirLis !== null) {
        dirLis.forEach((item) => {
            var folderOption = new Option(item.getPath(), item.getPath());
            destFolderName.add(folderOption);
        })
    }
  
    // Update output data
    var html = "";

    if (fullList.length > 0) {
        fullList.forEach((row) => {
            html += `<p>${row}</p>`;
        });
    }

    outputData.innerHTML = html;
}

// Adding new folder to the selected destination one
addFolderButton.onclick = (event) => {
    
    // Add new folder to the destination one
    var destFolder = root.findFolder(destFolderName.value);
    console.log('destFolder', destFolder);

    if (destFolder !== null) {
        var newFolder = new Folder(newFolderName.value, destFolder);
    }

    // Output results and clean controls
    updateOutput();
    addFolderButton.disabled = true;
    newFolderName.value = "";
}

// Adding new file to the selected destination one
addFileButton.onclick = (event) => {
    
    // Add new file to the destination folder
    var destFolder = root.findFolder(destFolderName.value);
    console.log('destFolder', destFolder);

    if (destFolder !== null) {
        var newFile = new File(newFileName.value, Number(newFileSize.value), destFolder);
    }

    // Output results and clean controls
    updateOutput();
    addFileButton.disabled = true;
    newFileName.value = '';
    newFileSize.value = '';
}