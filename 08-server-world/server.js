import express from "express";
import fs from "fs";

//Created instance of the express server
const app = express();

app.use(express.static("./public"));
app.use(express.json());

app.get("/world", async (req, res) => {
    //This function should read the world.json file and return the parsed JSON object
    const dataString = await fs.readFileSync("world.json", "utf-8");
    const dataObject = JSON.parse(dataString);
    res.json(dataObject);
});

app.post("/flowergift", async (req, res) => {
    //Same as the get function from before
    const worldData = await fs.readFileSync("./world.json", "utf-8");
    const world = JSON.parse(worldData);

    const giftRecipient = req.body;
    
    //Loops through the world to find the specified person and gives them a flower!
    for (let region of world.regions) {
        for (let town of region.towns) {
            for (let person of town.notable_people) {
                if (person.name === giftRecipient.name) {
                    person.items.push("Delicate Flower");
                    person.role += ", Receiver of Flowers";
                }
            }
        }
    }

    await fs.writeFileSync("world.json", JSON.stringify(world, null, 2));
    res.json(world);
});

app.listen(3000, () => console.log("Server running at http://localhost:3000"));