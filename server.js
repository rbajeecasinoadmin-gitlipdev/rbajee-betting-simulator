const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/api/bet/:amount", (req,res)=>{

    let bet = parseInt(req.params.amount);
    let result = Math.random();

    if(result > 0.5){
        res.json({result:"WIN", profit:bet*2});
    }else{
        res.json({result:"LOSE", profit:0});
    }

});

app.listen(3000,()=>{
    console.log("Casino Server Running http://localhost:3000");
});
