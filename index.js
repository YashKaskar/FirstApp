const express = require("express");
const app = express();

// app.use((req, res) => {
//     console.log("We got a new request");
//     res.send('<h1> Welcome to webPage </h1>')
// })


app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.get('/dog', (req, res) => {
    res.send('Woof')
})

app.get('/cats', (req, res) => {
    res.send('Meowww')
})


app.get('/cycle', (req, res) => {   
    res.send('Lets go for a ride')
})


app.listen(8080, () => {
    console.log("Listing On Port 8080")
})