// code away!
const express = require('express');

// const userData = require('./users/userDb');
// const postData = require('./posts/postDb');
const logger = require('./server');
const userRouter = require('./users/userRouter');

const server = express();
server.use(express.json(), logger);

server.use('/api/users', userRouter)

// server.get('/', (req, res) => {
//   postData.get()
//     .then(users => {
//       res.status(200).json(users)
//     })
//     .catch(err => {
//       res.status(500).json({ error: "your code is garbage" })
//     })
// })

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`Hellurr from ${port}`)
});