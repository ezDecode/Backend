const express = require('express')
const app = express()
// const port = 3000;


const userCheck = (req, res, next) => {
    const userValid = true;

    if(!userValid){
        return res.send('Unauthoorised User')
    }
    next()
}

app.get('/', (req, res) => {
  res.send('hello world')
})
app.get('/about', userCheck, (req, res) => {
  res.send('This is about page after auth check')
})
app.get('/contact', (req, res) => {
  res.send('hello world')
})


// app.listen(port, () => {
//     console.log(`Server on the port: ${port}`);
// })


app.listen(3000)