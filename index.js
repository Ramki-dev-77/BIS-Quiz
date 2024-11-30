import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

const port = 3000;
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));
app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/public/index.html");
})
app.post("/submit",(req,res)=>{
    res.render("quiz.ejs")
})
app.listen(port,(req,res)=>{
    console.log(`Server listening to the port ${port}`);
})

app.get("/back",(req,res)=>{
    res.render("quiz.ejs");
})

app.post("/result",(req,res)=>{
    let correct = req.body["result1"];
    let incorrect = req.body["result2"];
    let unattempt = req.body["result3"];
    const data = {
        right : correct,
        wrong : incorrect,
        not : unattempt
    }
    res.render("result.ejs",data);
})