import express from "express";
import fs from "fs";
import cors from "cors";

//Created instance of the express server
const app = express();

app.use(express.static("./public"));
app.use(express.json());
app.use(cors());

app.get("/api/pokemon", async (req, res) => {
    const dataString = await fs.readFileSync("data.json", "utf-8");
    const dataObject = JSON.parse(dataString);
    res.json(dataObject);
});

app.post("/api/teammate", async (req, res) => {
    //Same as the get function from before
    const pokeData = await fs.readFileSync("./data.json", "utf-8");
    const pokelist = JSON.parse(pokeData);

    const target = req.body.slot;
    console.log(req.body);

    //Finds the specified pokemon from the request body (I think?)
    const selectedPoke = pokelist.pokemon.team.find((poke) => poke.slot === target);


    //Parses the result, probably.
    selectedPoke.name = req.body.name;
    selectedPoke.nickname = req.body.nickname;
    selectedPoke.type = req.body.type;
    if (req.body.type2) {
        selectedPoke.type2 = req.body.type2;
    }
    selectedPoke.moves = [];
    selectedPoke.item = req.body.item;
    selectedPoke.nature = req.body.nature;
    selectedPoke.EVs.HP = parseInt(req.body.hp);
    selectedPoke.EVs.Attack = parseInt(req.body.attack);
    selectedPoke.EVs.Defense = parseInt(req.body.defense);
    selectedPoke.EVs.SpAttack = parseInt(req.body.spattack);
    selectedPoke.EVs.SpDefense = parseInt(req.body.spdefense);
    selectedPoke.EVs.Speed = parseInt(req.body.speed);

    await fs.writeFileSync("data.json", JSON.stringify(pokelist, null, 2));
    res.json(pokelist);
});

app.post("/formfill", async (req, res) => {
    console.log("Received:", req.body);
    console.log("Did something");
    
    //Same as the get function from before
    const pokeData = await fs.readFileSync("./data.json", "utf-8");
    const pokemon = JSON.parse(pokeData);
    //res.json(pokemon);

    const target = req.body.slot;
    console.log(req.body);

    //Finds the specified pokemon from the request body (I think?)
    const selectedPoke = pokemon.pokemon.team.find((poke) => poke.slot === target);

    if (!selectedPoke) {
            return res.status(400).json({ error: "Invalid slot number" });
        }
    //Parses the result, probably.
    selectedPoke.name = req.body.name;
    selectedPoke.nickname = req.body.nickname;
    selectedPoke.type = req.body.type1;
    if (req.body.type2) {
        selectedPoke.type2 = req.body.type2;
    }
    selectedPoke.item = req.body.item;
    selectedPoke.nature = req.body.nature;
    selectedPoke.moves = [
        req.body.move1,
        req.body.move2,
        req.body.move3,
        req.body.move4
    ];
    selectedPoke.EVs.HP = parseInt(req.body.hp);
    selectedPoke.EVs.Attack = parseInt(req.body.attack);
    selectedPoke.EVs.Defense = parseInt(req.body.defense);
    selectedPoke.EVs.SpAttack = parseInt(req.body.spattack);
    selectedPoke.EVs.SpDefense = parseInt(req.body.spdefense);
    selectedPoke.EVs.Speed = parseInt(req.body.speed);

    await fs.writeFile("./data.json", JSON.stringify(pokemon, null, 2));
    res.json({ success: true, pokemon });
});

app.listen(3000);