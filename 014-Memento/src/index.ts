import Clipboard from "./Clipboard";
import Document from "./Document";
import DocumentState from "./DocumentState";

// Getting UI elements
var editorPanel = document.getElementById('editor') as HTMLTextAreaElement;
var clipboardPanel = document.getElementById('clipboard') as HTMLElement;
var btnPush = document.getElementById('push') as HTMLButtonElement;
var btnUndo = document.getElementById('undo') as HTMLButtonElement;
var btnRedo = document.getElementById('redo') as HTMLButtonElement;

var doc = new Document(editorPanel.value);
var clipboard = new Clipboard();

editorPanel.onkeyup = (event) => {
    doc.setContent(editorPanel.value);
}

function updateClipboardpanel(){
    var html = '';
    var hist = clipboard.getHistory();

    for (const key in hist) {
        html += `<div class="${key === clipboard.getHistoryIndex().toString() ? 'cbItem' : ''}">${hist[key].getContent()}</div>`;
    }
    clipboardPanel.innerHTML = html;

    if (clipboard.getHistoryLength() > 0 && clipboard.getHistoryIndex() > -1) {
        btnUndo.disabled = false;
    } else {
        btnUndo.disabled = true;
    }

    if (clipboard.getHistoryIndex() < (clipboard.getHistoryLength() - 1)) {
        btnRedo.disabled = false;
    } else {
        btnRedo.disabled = true;
    }

    if (editorPanel.value !== doc.getContent()) {
        editorPanel.value = doc.getContent();
    }

    editorPanel.focus();
}

btnPush.onclick = (event) => {
    clipboard.push(doc);
    updateClipboardpanel();
}

btnUndo.onclick = (event) => {
    doc.setContent(clipboard.undo()?.getContent());
    updateClipboardpanel();
}

btnRedo.onclick = (event) => {
    doc.setContent(clipboard.redo()?.getContent());
    updateClipboardpanel();
}