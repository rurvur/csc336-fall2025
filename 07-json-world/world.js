import fs from "fs";

function readWorld() {
    const data = fs.readFileSync("world.json", "utf-8");
    const world = JSON.parse(data);

    console.log("The world of Pharloom is split into 3 regions:")
    for (let i = 0; i < world.regions.length; i++){
        console.log(world.regions[i].name);
    }
    console.log("\n");

    console.log("Pharloom itself has the following towns:")
    for (let i = 0; i < world.regions[0].towns.length; i++){
        console.log(world.regions[0].towns[i].name);
    }
    console.log("\n");

    console.log("The Citadel is home to these settlements:")
    for (let i = 0; i < world.regions[1].towns.length; i++){
        console.log(world.regions[1].towns[i].name);
    }
    console.log("\n");

    console.log("The Summit is divided into these areas:")
    for (let i = 0; i < world.regions[2].towns.length; i++){
        console.log(world.regions[2].towns[i].name);
    }
    console.log("\n");

    console.log("And now, a full list of every notable resident of Pharloom!");
    for (let i = 0; i < world.regions.length; i++) {
        for (let j = 0; j < world.regions[i].towns.length; j++) {
            for (let k = 0; k < world.regions[i].towns[j].notable_people.length; k++) {
                console.log(`${world.regions[i].towns[j].notable_people[k].name} the ${world.regions[i].towns[j].notable_people[k].role}`);
            }
        }
    }
    
}

readWorld();