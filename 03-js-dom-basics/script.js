let navigationBar = document.getElementsByClassName("navbar");

let silk = 0;
let silkClick = 1;
let fleaCount = 0;
let fleaCost = 15;
let needleCost = 100;
const awoo = new Audio("awoo.mp3");
setInterval(fleaFunc, 1000);

function clickedOnDemoBox() {
    console.log("CLICK!");
}

function clickedSilk() {
    silk += silkClick;
    changeCount();
}

function clickedNeedle() {
    if (silk >= needleCost) {
        silkClick++;
        silk = silk - needleCost;
        needleCost = Math.round(needleCost * 5);
        changeCount();
        updateNeedle();
    }
}

function clickedFlea() {
    if (silk >= fleaCost) {
        fleaCount++;
        silk = silk - fleaCost;
        fleaCost = Math.round(fleaCost * 1.5);
        changeCount();
        updateFlea();
        createFlea();
        awoo.currentTime = 0;
        awoo.play();
    }
}

function changeCount() {
    document.getElementById("silkCount").innerHTML = silk;
}

function fleaFunc() {
    silk += fleaCount;
    changeCount();
}

function updateFlea(){
    document.getElementById("fleaCost").innerHTML = fleaCost;
}

function updateNeedle(){
    document.getElementById("needleCost").innerHTML = needleCost;
    document.getElementById("needleLv").innerHTML = silkClick;
}


function createFlea(){
    const fleaArea = document.getElementById("fleaCaravan");

    const img = document.createElement("img");
    img.src = "Flea.png"; 
    img.classList.add("flea");

    const areaWidth = fleaArea.clientWidth;
    const areaHeight = fleaArea.clientHeight;
    const imgWidth = 50;
    const imgHeight = 50;

    const randomX = Math.floor(Math.random() * (areaWidth - imgWidth));
    const randomY = Math.floor(Math.random() * (areaHeight - imgHeight));

    img.style.left = `${randomX}px`;
    img.style.top = `${randomY}px`;

    fleaArea.appendChild(img);
    fleas = document.getElementsByClassName("Flea");
}