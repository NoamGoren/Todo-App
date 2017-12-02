const express = require('express');
const todoRouter = express.Router();

todoRouter.get('/todos', function (req, res, next) {
  res.send({
    response: 'response from GET /todos'
  })
  next();
});



module.exports = {todoRouter};
