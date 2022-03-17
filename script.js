import { projectsStorage } from "./Projects.js";

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
    new Project("Screen coordinate finder", 0, PYTHON_PROJECT), 
    new Project("HomeWorkCompleter.cs", "monkey", CS_PROJECT),
    new Project("Estes IP bank", "rick", WEB_APP_PROJECT)
];

function selectChanged(event) {
    if (event.target.id == "python-dropdown") {
        susyBaka(PythonDropdown.children[PythonDropdown.selectedIndex].value);
    } else if (event.target.id == "cs-dropdown") {
        susyBaka(CsDropdown.children[CsDropdown.selectedIndex].value);
        console.log("hello")
    } else if (event.target.id == "web-applications-dropdown") {
        susyBaka(WebAppsDropdown.children[WebAppsDropdown.selectedIndex].value)
    }
}
function getProjectByName(name) {
    for (let _ in projects) {
        if (projects[_].name == name) {
            return projects[_];
        }
    }
    return;
}
function susyBaka(value) {
    console.log(value);
    let project = getProjectByName(value);
    console.log(projectsStorage[project.fpath]);
    if(project.fpath === "monkey") {
        document.getElementById("download-png").style = "block";
    } else if (project.fpath === "rick") {
        window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }
    document.getElementById("code-bank").innerHTML = projectsStorage[project.fpath].replace("\n", "<br>");
    document.getElementById("code-bank").style = "block";   
}
PythonDropdown.addEventListener("change", selectChanged);
WebAppsDropdown.addEventListener("change", selectChanged);
CsDropdown.addEventListener("change", selectChanged);
