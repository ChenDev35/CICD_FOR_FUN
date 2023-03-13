const express = require('express');
const port = process.env.port || 3000;
const app = express();
let x = 0;

app.get('/', (req, res) => {
  x += 1;
  console.log('a blank request has arrived');
  res.send(`<h1>Hellow World ${x}</h1>`);
});

app.get('/apple', (req, res) => {
    console.log('an apple request has arrived');
    res.send(`<h1>this is apple 2</h1>`);
  });
  

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
