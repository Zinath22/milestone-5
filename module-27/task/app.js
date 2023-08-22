const textarea = document.getElementById("textarea1");



function f1(e) {
    if (textarea.style.fontWeight == "normal") {
        textarea.style.fontWeight = "bold";
        e.classList.add("active");
    }
    else {
        textarea.style.fontWeight = "normal";
        e.classList.remove("active");
    }
}

function f2(e) {
    if (textarea.style.fontStyle == "normal") {
        textarea.style.fontStyle = "italic";
        e.classList.add("active");
    }
    else {
        textarea.style.fontStyle = "normal";
        e.classList.remove("active");
    }
}

function f3(e) {
    if (textarea.style.textDecoration == "underline") {
        textarea.style.textDecoration = "none";
        e.classList.remove("active");
    }
    else {
        textarea.style.textDecoration = "underline";
        e.classList.add("active");
    }
}

function f4(e) {
    textarea.style.textAlign = "left";
}

function f5(e) {
    textarea.style.textAlign = "center";
}

function f6(e) {
    textarea.style.textAlign = "right";
}
function f7(e) {
    let value = e.value;
    textarea.style.fontSize = value + "px";
}

function f8(e) {
    if (textarea.style.textTransform == "none") {
        textarea.style.textTransform = "uppercase";
        e.classList.add("active");
        
    }
    else {
        textarea.style.textTransform = "none";
        e.classList.remove("active");
    }
}

function f9() {
    textarea.style.fontWeight = "normal";
    textarea.style.textAlign = "left";
    textarea.style.fontStyle = "normal";
    textarea.style.textTransform = "capitalize";
    textarea.value = "";
}

function f10(e) { 
    let value = e.value;
    textarea.style.color = value;
}

window.addEventListener('load', () => {
    textarea.value = "";
});