const express = require("express");
const app = express();
app.listen(3000);
app.get("/", (req,res)=>{
    res.send("Deploying 1st backend server or application");
})
