// code away!
const express = require('express');

// const userData = require('./users/userDb');
const postData = require('./posts/postDb');
const logger = require('./server');

const server = express();
server.use(express.json(), logger);

server.get('/', (req, res) => {
  postData.get()
    .then(users => {
      res.status(200).json(users)
    })
    .catch(err => {
      res.status(500).json({ error: "your code is garbage" })
    })
})

server.listen(5000, () => {
  console.log('Hellurr from 5000')
});