let button = document.querySelector("#callBackButton");
button.addEventListener("click", getFood);

async function getFood() {
    //Food API
    let foodRequest = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
    let foodData = await foodRequest.json();
    //By calling the function with foodData.meals[0], we give the function all of the information for the recipe and save me having to write .meals[0]
    constructMeal(foodData.meals[0])

    //Joke API
    let jokeReq = await fetch("https://official-joke-api.appspot.com/random_joke");
    let jokeData = await jokeReq.json();
    tellMeAJoke(jokeData);
}

async function constructMeal(data) {
    let name = data.strMeal;
    let tags = data.strTags;
    let directions = data.strInstructions;
    let mealImg = data.strMealThumb;

    //I tried to replicate the implementation from https://random-dish-generator.netlify.app/, but theirs was very long and I didn't quite get it,
    //so I spent a bunch of time googling how to use arrays in JS. Not sure if we went over them in the class I missed.
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        //The stuff in the brackets was taken from StackOverflow, idk why their funky little special dashes work but normal apostrophes don't
        let ingredient = data[`strIngredient${i}`];
        let measure = data[`strMeasure${i}`];

        //This if statement was generated, didn't know about the trim function
        if (ingredient && ingredient.trim() !== "") {
            ingredients.push(`${measure ? measure.trim() : ""} ${ingredient.trim()}`);
        }
    }

    //Removes image if there is one already.
    try {
        let target = document.querySelector(".target");
        target.remove();
    } catch(error) {
        console.log("No image found");
    }

    //Generates an image of the food based on the fetch results
    const myImg = document.createElement("img");
    myImg.src = mealImg;
    myImg.classList.add("foodImage"); 
    myImg.classList.add("target"); 
    document.getElementById("foodImage").appendChild(myImg);

    //Replaces the empty divs with actual stuff
    let nameDiv = document.querySelector("#foodName");
    nameDiv.innerHTML = name;
    let tagDiv = document.querySelector("#foodTags");
    tagDiv.innerHTML = tags;
    let direcDiv = document.querySelector("#Directions");
    direcDiv.innerHTML = directions;
    let ingrDiv = document.querySelector("#Ingredients");
    ingrDiv.innerHTML = "Ingredients: <br>"

    //Adds ingredients as a list
    for (let i = 0; i < ingredients.length; i++) {
        ingrDiv.innerHTML += ingredients[i];
        ingrDiv.innerHTML += "<br>"
    }
}

//The assignment called for 2 APIs, so here's a joke while you make the recipe
async function tellMeAJoke(jokeData){
    console.log(jokeData);
    let setup = jokeData.setup;
    let punchline = jokeData.punchline;
    let jokeDiv = document.querySelector("#Funny");
    jokeDiv.innerHTML = "Here, a joke for you: <br>"
    jokeDiv.innerHTML += setup + "<br>" + punchline;
}



//Notes from class

//button.addEventListener("click", e => console.log("Clicked!"));
//button.addEventListener("click", e => { console.log("Clicked!") });

//let dogRequest = fetch("https://dog.ceo/api/breeds/image/random");

// dogRequest
//     .then( (dogResponse) => { return dogResponse.json() })
//     .then( (dogData) => { console.log(dogData) 
//         let dogImageHTML = document.createElement("img");
//         dogImageHTML.src = dogData.message;
//         document.querySelector("#dogDiv").appendChild(dogImageHTML);
//     })
//     .catch( () => console.log("wrong!") );

// async function produceDog() {
//     let dogRequest = await fetch("https://dog.ceo/api/breeds/image/random");
//     let dogData = await dogRequest.json();
//     let dogImageHTML = document.createElement("img");
//     dogImageHTML.src = dogData.message;
//     dogImageHTML.width = 200;
//     document.querySelector("#dogDiv").appendChild(dogImageHTML);
// }