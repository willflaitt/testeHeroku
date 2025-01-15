const express = require('express')
const path = require("path")

const app = express()
const router = express.Router()

console.log(path.join(__dirname + "/pages/home.html"))

router.get("/home", (req, res)=>{
  res.sendFile(path.join(__dirname + "/pages/home.html"))
})

router.get("/outra_pagina", (req, res)=>{
  res.sendFile(path.join(__dirname + "/pages/outra_pagina.html"))
})

app.get('/', function (req, res) {
  res.send('Hello World')
})
//console.log(path.join(__dirname + "pages/home.html"))

app.use(router)

app.listen(3333, ()=>{
  console.log("Servidor rodando")
})

