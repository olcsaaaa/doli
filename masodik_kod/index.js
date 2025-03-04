const express = require("express");
const listMaker = require("./listMaker.js")
const app = express();
const port = 2501;

app.get("/slice", (req,res)=>{
    const text = req.query.text
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    if(a==undefined||b==undefined||text==undefined||isNaN(a)||isNaN(b)||b<a||a>text.length) {
        res.status(400)
        res.send("Kérem, adja meg az összes paramétert!")
    }else{
        res.send(text.slice(a, b))
    }
    })

    app.get("/list", (req, res)=>{
        const n = Math.floor(Math.random()*9)+2
        const k = Math.floor(Math.random()*9)+2
        const list = listMaker(n,k)
        res.send(list)
    })

app.listen(port,()=>{
    console.log(`Listenin on port:${port}`);
    
})