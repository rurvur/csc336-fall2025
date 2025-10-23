let world

let people = []

async function getWorld() {
    let response = await fetch("/world");
    world = await response.json();
    document.querySelector("body").innerHTML = `<h1>${world.regions[0].name}</h1>`;
}

getWorld();

async function setup() {
    //console.log("loaded!");
    await getWorld();

    createCanvas(800, 600);
    colorMode(HSB);
    background(5, 100, 100);

    for (let region of world.regions){
        for (let town of region.towns){
            for (let person of town.notable_people) {
                people[person.name] = new Person(person);
            }
        }
    }
    // for (person of people){
    //     console.log(person.name);
    // }

    
}

function draw() {
    background(frameCount%360, 100, 100);

    for (let name in people){
        let person = people[name];
        person.update();
    }
}