const filter = document.getElementById("filter");
const projects = document.getElementById("projects");
let buttonArray = []

// window.onload = function (e) {
//     if (this.location.href = "index.html") {
//         if(this.localStorage.getItem("filter") != ""){
//             filterProjects(this.localStorage.getItem("fiter"));
//             localStorage.setItem("filter", "");
//         }
//     }
// };

window.onload = (event) => {
    if (window.location.href.indexOf("index.html") > -1) {
        if (localStorage.getItem("filter") != "") {
            filterProjects(localStorage.getItem("fiter"));
            localStorage.setItem("filter", "");
        }
    }
};

let showAll = document.createElement("a");
showAll.innerText = "Show All";
showAll.setAttribute("type", "button");
showAll.addEventListener("click", function (e) {
    filterProjects("showAll")
}, false);
buttonArray.push(showAll);

let text = document.createElement("a");
text.innerText = "text";
text.setAttribute("type", "button");
text.addEventListener("click", function (e) {
    filterProjects("text")
}, false);
buttonArray.push(text);

let ul = document.createElement("ul");

buttonArray.forEach(button => {
    let list = document.createElement("li");
    list.appendChild(button);
    ul.appendChild(list);
});

//errors on about page, doesn't exist
filter.append(ul);

function filterProjects(buttonType) {
    if (buttonType == "showAll") {
        projects.childNodes.forEach(node => (node.nodeName != "#text" ? node.classList.contains("d-none") ? node.classList.remove("d-none") : console.log() : console.log()));
    } else
        if (buttonType == "text") {
            projects.childNodes.forEach(node => (node.nodeName != "#text" ? node.classList.contains("text") ? console.log() : node.classList.add("d-none") : console.log()));
        }
}

function textProjects() {
alert("help");

    localStorage.setItem("filter", "text");

    console.log(localStorage.getItem("filter"));

    location.replace("index.html");
}