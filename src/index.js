import cors from 'cors';
const express = require('express')
const app = express()
app.use(express.json())
app.use(cors()); 
const port = 3000
var x = 0.0;
var y = 0.0;
var z = 0.0;

app.get('/', (req, res) => {
  res.send(`${x},${y},${z}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.post('/', (req, res) => {
    console.log(req.body["data"]);
    var split = req.body["data"].split(',');
    console.log(split); 
    x = split[0];
    y = split[1];
    z = split[2];
    res.send('Thanks for your POST');
})