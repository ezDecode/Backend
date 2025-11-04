const express = require('express')
const app = express()
const fs  = require('fs');

const requestTime = (req, res, next) => {
  //We'll check if the file exists or not
  const logFile = 'log.txt';

  if (!fs.existsSync(logFile)) {
    fs.writeFileSync(logFile, '-- Log File Created --\n\n');
  }

  const logEntry = `Logged at ${Date.now()} and the method is ${req.method}.\n`
  fs.appendFileSync(logFile, logEntry)
  next()
}
app.use(requestTime)


app.get('/', (req, res) => {

  let responseText = "Well log this time in log.txt"
  res.send(responseText)
})

app.listen(3000)