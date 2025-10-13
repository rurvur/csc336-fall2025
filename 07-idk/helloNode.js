const fs = require("fs");

let fileContents;
//let fileContents = fs.readFileSync ("./randomNumbers.txt");

let randomNumbers = [];
let myWriting = "Amogus";

try {
    let fileContents = fs.readFileSync("./myText.txt");
} catch(error) {
    console.log("You donked up")
}









// randomNumbers = JSON.parse(fileContents);

// for (i = 0; i < 10; i++) {
//     let rand = Math.random();
//     randomNumbers[i] = rand;
//     console.log(randomNumbers[i]);
// }

