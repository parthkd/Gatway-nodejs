const express = require("express");
const router = express.Router();
const axios = require("axios");
const registry = require('./registry.json')
const fs = require("fs");
router.all("/:apiName/:path", (req, res) => {

    if (registry.services[req.params.apiName]) {
        axios({
            method: req.method,
            url: registry.services[req.params.apiName].url + req.params.path,
            header: req.headers,
            data: req.body
        }).then(response => {
            res.send(response.data)
        })
    }
    else
{    res.send("API NAME DOSE NOT EXISTS")
}
})


router.post("/register", (req,res)=>{
    const registrationInfo = req.body;
    registry.services[registrationInfo.apiName]={...registrationInfo}
    fs.writeFile('./routes/registry.json',JSON.stringify(registry), (error)=>{
        if(error){
            res.send("could not register "+registrationInfo.apiName+`\n${error}`)
        }
        else{
            res.send("registration successful man")
        }
    })
})


module.exports = router