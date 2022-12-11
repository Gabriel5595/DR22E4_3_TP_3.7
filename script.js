const body = document.body;

body.setAttribute("onload", "negrito()");

function negrito() {
    body.style.fontWeight = "bold";
}

console.log(body);