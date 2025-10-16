import express from "express";

//Created instance of the express server
const app = express();

app.use(express.static("./public"));
app.use(express.json());

app.get("/api/randomNumber", (req, res) => {
    res.send(Math.random());
})

app.post("/api/add", (req, res) => {
    console.log(req.body);
})

app.listen(3000);