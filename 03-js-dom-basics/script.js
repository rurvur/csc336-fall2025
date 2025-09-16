let navigationBar = document.getElementsByClassName("navbar");

let silk = 0;
let silkClick = 1;
let silkMult = 1;
let fleaCount = 0;
let fleaCost = 15;
let fleaMult = 1;
let needleCost = 100;
let maidenCost = 1000;
let beastCost = 500;
const awoo = new Audio("awoo.mp3");
setInterval(fleaFunc, 1000);

function clickedOnDemoBox() {
    console.log("CLICK!");
}

function clickedSilk() {
    silk += silkClick * silkMult;
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

function clickedMaiden() {
    if (silk >= maidenCost) {
        silkMult++;
        silk = silk - maidenCost;
        maidenCost = Math.round(maidenCost * 10);
        changeCount();
        updateMaiden();
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

function clickedBeast() {
    if (silk >= beastCost) {
        fleaMult++;
        silk = silk - beastCost;
        beastCost = Math.round(beastCost * 3);
        changeCount();
        updateBeast();
    }
}

function changeCount() {
    document.getElementById("silkCount").innerHTML = silk;
}

function fleaFunc() {
    silk += fleaCount * fleaMult;
    changeCount();
}

function updateFlea(){
    document.getElementById("fleaCost").innerHTML = fleaCost;
}

function updateNeedle(){
    document.getElementById("needleCost").innerHTML = needleCost;
}

function updateMaiden(){
    document.getElementById("maidenCost").innerHTML = maidenCost;
}

function updateBeast(){
    document.getElementById("beastCost").innerHTML = beastCost;
}

//This function was mostly generated, I edited it a bit though
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

//Added this exclusively to meet requirements lol
function requiredButton() {
    const silkText = document.getElementById("silkCount");
    const buttonCol = document.getElementById("upgradeButton");
    silkText.style.color = "red";
    buttonCol.style.backgroundColor = "bisque";
}