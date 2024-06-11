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
    if (buttonType == "showAll") {
        projects.childNodes.forEach(node => (node.nodeName != "#text" ? node.classList.contains("d-none") ? node.classList.remove("d-none") : console.log() : console.log()));
    } else
        if (buttonType == "wordpress") {
            projects.childNodes.forEach(node => (node.nodeName != "#text" ? node.classList.contains("wordpress") ? console.log() : node.classList.add("d-none") : console.log()));
        }
}

function wordpressProjects() {
    localStorage.setItem("filter", "wordpress");

    console.log(localStorage.getItem("filter"));

    window.location = "index.html";
}