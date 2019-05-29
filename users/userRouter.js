const express = require('express');

const userData = require('../users/userDb');
const postData = require('../posts/postDb');

const router = express.Router();

router.post('/', (req, res) => {
  userData.insert(req.body)
    .then(users => {
      res.json(users)
    })
    .catch(err => {
      res.status(500).json({ success: false, err })
    })
});

router.post('/:id/posts', (req, res) => {
  userData.insert(req.body)
    .then(user => {
      res.json(user)
    })
    .catch(err => {
      res.status(500).json({ success: false, err })
    })
});

router.get('/', (req, res) => {
  userData.get()
    .then(users => {
      res.json(users)
    })
    .catch(err => {
      res.status(500).json({ success: false, err })
    })
});

router.get('/:id', (req, res) => {
  userData.getById(req.params.id)
    .then(user => {
      res.json(user)
    })
    .catch(err => {
      res.status(500).json({ success: false, err });
    });
});

router.get('/:id/posts', (req, res) => {
  postData.getById(req.params.id)
    .then(post => {
      res.json(post);
    })
    .catch(err => {
      res.status(500).json({ success: false, err })
    })
});

router.delete('/:id', (req, res) => {
  userData.remove(req.params.id)
    .then(user => {
      res.status(204).json({ success: true })
    })
    .catch(err => {
      res.status(500).json({ success: false })
    })
});

router.put('/:id', (req, res) => {
  userData.update(req.params.id, req.body.name)
    .then(user => {

    })
});

//custom middleware

function validateUserId(req, res, next) {
  if (req.body.id) {
    /************Come back here eventually */

    next();
  } else {
    res.status(400).json({
      message: "invalid user id"
    })
  }
};

function validateUser(req, res, next) {
  if (!req.body) {
    res.status(400).json({
      message: "missing user data"
    });
  } else if (!req.body.name) {
    res.status(400).json({
      message: "missing required name field"
    });
  } else {
    next();
  }
};

function validatePost(req, res, next) {
  if (!req.body) {
    res.status(400).json({
      message: "missing post data"
    });
  } else if (!req.body.text) {
    res.status(400).json({
      message: "missing required text field"
    });
  } else {
    next();
  }
};

module.exports = router;
