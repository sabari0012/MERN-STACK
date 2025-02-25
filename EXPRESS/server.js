const express = require('express')
const app = express ()
const port = 3000
app.get('/',(req,res)=>{
    res.send("WELCOME TO SERVER")
})
App.listen(port,()=>{
    console.log('server is running in port :'+ port)
    console.log("HELLO HII")
})
