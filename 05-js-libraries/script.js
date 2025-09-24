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