const filter = document.getElementById("filter");
const projects = document.getElementById("projects");
let buttonArray = []

window.onload = (event) => {
    if (window.location.href.indexOf("index.html") > -1) {
        if (localStorage.getItem("filter") != "") {
            filterProjects(localStorage.getItem("filter"));
            localStorage.setItem("filter", "");
        }
    }
};

if (window.location.href.indexOf("index.html") > -1) {
    let showAll = document.createElement("a");
    showAll.innerText = "Show All";
    showAll.setAttribute("type", "button");
    showAll.addEventListener("click", function (e) {
        filterProjects("showAll")
    }, false);
    buttonArray.push(showAll);

    let wordpress = document.createElement("a");
    wordpress.innerText = "WordPress";
    wordpress.setAttribute("type", "button");
    wordpress.addEventListener("click", function (e) {
        filterProjects("wordpress")
    }, false);
    buttonArray.push(wordpress);

    let html = document.createElement("a");
    html.innerText = "HTML";
    html.setAttribute("type", "button");
    html.addEventListener("click", function (e) {
        filterProjects("html")
    }, false);
    buttonArray.push(html);

    let react = document.createElement("a");
    react.innerText = "React";
    react.setAttribute("type", "button");
    react.addEventListener("click", function (e) {
        filterProjects("react")
    }, false);
    buttonArray.push(react);

    let solidity = document.createElement("a");
    solidity.innerText = "Solidity";
    solidity.setAttribute("type", "button");
    solidity.addEventListener("click", function (e) {
        filterProjects("solidity")
    }, false);
    buttonArray.push(solidity);

    let python = document.createElement("a");
    python.innerText = "Python";
    python.setAttribute("type", "button");
    python.addEventListener("click", function (e) {
        filterProjects("python")
    }, false);
    buttonArray.push(python);

    let androidStudio = document.createElement("a");
    androidStudio.innerText = "Android Studio";
    androidStudio.setAttribute("type", "button");
    androidStudio.addEventListener("click", function (e) {
        filterProjects("androidStudio")
    }, false);
    buttonArray.push(androidStudio);

    let ul = document.createElement("ul");

    buttonArray.forEach(button => {
        let list = document.createElement("li");
        list.appendChild(button);
        ul.appendChild(list);
    });


    //errors on about page, doesn't exist
    filter.append(ul);
}

function filterProjects(buttonType) {

    projects.childNodes.forEach(node => (node.nodeName != "#text" ? node.classList.contains("d-none") ? node.classList.remove("d-none") : console.log() : console.log()));

    if (buttonType != 'showAll') {
        projects.childNodes.forEach(node => (node.nodeName != "#text" ? node.classList.contains(buttonType) ? console.log() : node.classList.add("d-none") : console.log()));
    }
}

function wordpressProjects() {
    localStorage.setItem("filter", "wordpress");

    console.log(localStorage.getItem("filter"));

    window.location = "index.html";
}

function htmlProjects() {
    localStorage.setItem("filter", "html");

    console.log(localStorage.getItem("filter"));

    window.location = "index.html";
}

function reactProjects() {
    localStorage.setItem("filter", "react");

    console.log(localStorage.getItem("filter"));

    window.location = "index.html";
}

function solidityProjects() {
    localStorage.setItem("filter", "solidity");

    console.log(localStorage.getItem("filter"));

    window.location = "index.html";
}

function pythonProjects() {
    localStorage.setItem("filter", "python");

    console.log(localStorage.getItem("filter"));

    window.location = "index.html";
}

function androidStudioProjects() {
    localStorage.setItem("filter", "androidStudio");

    console.log(localStorage.getItem("filter"));

    window.location = "index.html";
}