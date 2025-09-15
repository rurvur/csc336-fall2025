let navigationBar = document.getElementsByClassName("navbar");

let silk = 0;
let silkClick = 1;
let fleaCount = 0;
setInterval(fleaFunc, 25000);

function clickedOnDemoBox() {
    console.log("CLICK!");
}

function clickedSilk() {
    silk += silkClick;
    changeCount();
}

function changeCount() {
    document.getElementById("silkCount").innerHTML = silk;
}

function fleaFunc() {
    silk += fleaCount * 5;
    changeCount();
}