const express = require("express");
const app = express();
const PORT = 3001
app.use(express.json());
app.get("/fakeapi",(req,res,next)=>{
    res.send("Hello From fake api server")
    
})

app.post("/dogapi",(req,res,next)=>{
    res.send("Hello From dog api server")
    
})
app.listen(PORT,()=>{
    console.log("Fake server started");
})