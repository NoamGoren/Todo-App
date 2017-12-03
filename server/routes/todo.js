const express = require('express');
const todoRouter = express.Router();
var {Todo}=require('../models/todo');
var{mongoose}=require('../db/mongoose');

// todoRouter.get('/todos', function (req, res, next) {
//   res.send({
//     response: 'response from GET /todos'
//   })
//   next();
// });

//GET all the todos
// todoRouter.get('/todos',(req,res,next)=>{
//   Todo.find().then((todos)=>{
//     res.send({todos});
//     next();
//   },(e)=>{
//     res.status(400).send(e);
//   });
// });
//
//
// todoRouter.post('/register',(req,res)=>{
// var todo= new Todo({
//   text: req.body.text
// });
// todo.save().then((doc)=>{
//   res.send(doc);
// },(e)=>{
//   res.status(400).send(e);
// });
// });
//
// module.exports = {todoRouter};
