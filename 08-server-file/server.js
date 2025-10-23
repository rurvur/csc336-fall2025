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

app.listen(3000, () => console.log("Server running at http://localhost:3000"));