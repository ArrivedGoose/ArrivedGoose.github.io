const CodeBank = document.getElementById("code-bank");
const PythonDropdown = document.getElementById("python-dropdown");
const CsDropdown = document.getElementById("cs-dropdown");
const WebAppsDropdown = document.getElementById("web-applications-dropdown");

const PYTHON_PROJECT = 0;
const CS_PROJECT = 1;
const WEB_APP_PROJECT = 2;

class Project {
    constructor(name, fpath, category) {
        this.name = name;
        this.fpath = fpath;

        let categories = [PythonDropdown, CsDropdown, WebAppsDropdown];
        let select = categories[category];

        this.element = document.createElement("option");
        this.element.value = name;
        this.element.innerHTML = name;
        select.appendChild(this.element);
    }
}

let projects = [
    new Project("Screen coordinate finder", "C:\Users\cuttl\hello\My-Website\Projects\MouseCordinateFinder.txt", PYTHON_PROJECT), 
    new Project("Mc Auto Buyer", "this will buy stuff", PYTHON_PROJECT)
];