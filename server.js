const express = require("express");
const mongoose = require("mongoose");
const PORT = 2023;
const app = express();
app.use(express.json());

const router = require("./router/pigRouter")
app.use(router)

app.get("/", (req, res)=>{
    res.send("welcome to my world of possibilities")
});




mongoose.connect("mongodb+srv://amagbaugochukwu:tNGFBoZKclidj2J1@cluster0.jyrip2b.mongodb.net/")
.then ( () => {
    console.log("Database is Connected Successfully")
})
    




app.listen(PORT, () =>{
    console.log(`listening to server on port: ${PORT}`)
});