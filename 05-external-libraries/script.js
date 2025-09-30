//onclick events to get the notifications to show!
window.onload = function () {
    const crumble = document.getElementById("cuberry");
    const hearts = document.getElementById("heartbeet");
    const meats = document.getElementById("spikyhen");

    crumble.addEventListener("click", () => {
      Toastify({
        text: "Contains: fruit. Do not allow Tabby slimes to partake!",
        duration: 3000,
        gravity: "top",  
        position: "right", //Positions the notifications at the top right, unintrusive but noticeable
        style: {
            background: "linear-gradient(to right, #d6845cff, #c86bb2ff)",
        }
      }).showToast();
    })

    hearts.addEventListener("click", () => {
      Toastify({
        text: "Contains: vegetables. Carnivorous and fruit-loving slimes may find this too bitter!",
        duration: 3500,
        gravity: "top",  
        position: "right",
        style: {
            background: "linear-gradient(to right, #526fbdff, #5ab29cff)",
        }
      }).showToast();
    })

    meats.addEventListener("click", () => {
      Toastify({
        text: "Contains: meat. Careful with your vegetarian slimes! This happens to be perfect for your carnivores though",
        duration: 4000,
        gravity: "top",  
        position: "right",
        style: {
            background: "linear-gradient(to right, #350000ff, #000000ff)",
        }
      }).showToast();
    })
  }



//This stuff is just notes from the class demo, used for reference.
class Person {
    constructor(n) {
        this.name = n;
    }

    sayHello(howManyTimes) {
        for (let i = 0; i < howManyTimes; i++){
            console.log("Hello, my name is " + this.name);
        }
    }
}

let rhys = new Person("Rhys");
rhys.sayHello(21);

let myButton = document.querySelector("#myButton");

//Scope: object itself
function buttonClicked(e) {
    console.log("BUTTON CLICKED");
    console.log(this);
}

//Scope: window
myButton.addEventListener("click", (e) => {
    console.log("BUTTON CLICKED");
    console.log(this);
})