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

app.get('/', (req, res) => {
    res.send('Welcome to the homepage!');
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

app.listen(3000);