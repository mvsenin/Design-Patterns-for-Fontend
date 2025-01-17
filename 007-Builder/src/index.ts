import Employee from "./Employee";

// Get UI elements
var emplName : HTMLInputElement;
var emplBirthdate : HTMLDataElement;
var emplCity : HTMLInputElement;
var emplCompany : HTMLInputElement;
var emplPosition : HTMLInputElement;
var btnSubmit : HTMLButtonElement;
var outputContainer: HTMLElement;

emplName = document.querySelector("#emplName") as HTMLInputElement;
emplBirthdate = document.querySelector("#emplBirthdate") as HTMLDataElement;
emplCity = document.querySelector("#emplCity") as HTMLInputElement;
emplCompany = document.querySelector("#emplCompany") as HTMLInputElement;
emplPosition = document.querySelector("#emplPosition") as HTMLInputElement;
btnSubmit = document.querySelector("#submit") as HTMLButtonElement;
outputContainer = document.querySelector("#outputContainer") as HTMLElement;

var employee: Employee;
var expr: string;

// Updates output
function updateOutput() {
    outputContainer.innerHTML = `The object creation expression is: <b>${expr}</b><br><br>`;
    outputContainer.innerHTML += employee.stringify();
}

// Checkd form
emplName.onkeyup = (event) => {
    if (emplName.value !== "") {
        btnSubmit.disabled = false;
    } else {
        btnSubmit.disabled = true;
    }
}

// Builds employee instance
btnSubmit.onclick = (event) => {
    expr = `new Employee('${emplName.value}')`;
    employee = new Employee(emplName.value);
    if (emplBirthdate.value) {
        expr += `.setBirthdate(new Date('${emplBirthdate.value}'))`;
        employee = employee.setBirthdate(new Date(emplBirthdate.value)).build();
    }
    if (emplCity.value) {
        expr += `.setCity('${emplCity.value}')`;
        employee = employee.setCity(emplCity.value).build();
    }
    if (emplCompany.value) {
        expr += `.setCompany('${emplCompany.value}')`;
        employee = employee.setCompany(emplCompany.value).build();
    }
    if (emplPosition.value) {
        expr += `.setPosition('${emplPosition.value}')`;
        employee = employee.setPosition(emplPosition.value).build();
    }
    expr += `.build()`;
    updateOutput();
}