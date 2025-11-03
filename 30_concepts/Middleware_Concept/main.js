const express = require('express')
const app = express()
const fs  = require('fs')
// import { existsSync } from 'fs';

const requestTime = (req, res, next) => {
  //We'll check if the file exists or not


  const fileExist = fs.existsSync('logs.txt')
  const itHasContent = fs.readFileSync("logs.txt")
  if(fileExist){
    if()
  }

  fs.writeFileSync("logs.txt", `Logged at ${Date.now()} is a ${req.method}`)
  next()
}
app.use(requestTime)


app.get('/', (req, res) => {

  let responseText = "Well log this time in logs.txt<br>"
  res.send(responseText)
})

app.listen(3000)