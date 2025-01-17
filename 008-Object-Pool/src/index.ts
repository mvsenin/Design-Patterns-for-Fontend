import ObjectPool from "./ObjectPool";
import PooledObject from "./PooledObjext";

// Creating object pool
var pool = new ObjectPool(10);

// Array of objects in use for demo purposes
var inUse: PooledObject[] = [];

// Getting UI elements
var availablePool = document.getElementById('availablePool') as HTMLElement;
var useExtra = document.getElementById('useExtra') as HTMLInputElement;
var btnUse = document.getElementById('btnUse') as HTMLButtonElement;
var btnRelease = document.getElementById('btnRelease') as HTMLButtonElement;
var btnTest = document.getElementById('btnTest') as HTMLButtonElement;
var inUsePool = document.getElementById('inUsePool') as HTMLElement;

// Updates output data and UI elements
function updateOutput() {
    availablePool.innerHTML = `<b>Pool of available objects [${pool.getAvailableSize()}]:</b><br>${pool.stringifyAvailable()}`;
    inUsePool.innerHTML = `<b>Pool of objects in use [${pool.getInUseSize()}]:</b><br>${pool.stringifyInUse()}`;
    btnUse.disabled = !(pool.getAvailableSize() > 0) && !useExtra.checked;
    btnRelease.disabled = !(pool.getInUseSize() > 0);
    btnTest.disabled = !(pool.getInUseSize() > 0);
}

updateOutput();

// Event processing methods

useExtra.onchange = (event) => {
    updateOutput();
}

// Take or create object for use
btnUse.onclick = (event) => {
    var obj = pool.acquire();
    if (obj !== undefined) {
        inUse.push(obj);
        updateOutput();
    }
}

// Release object being used
btnRelease.onclick = (event) => {
    var obj = inUse.pop();
    pool.release(obj);
    updateOutput();
}

// Runs object jobs
btnTest.onclick = (event) => {
    pool.run();
    updateOutput();
}