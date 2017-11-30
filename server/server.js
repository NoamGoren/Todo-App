
//libary imports
const _=require('lodash');
const express=require('express');
const bodyParser=require('body-parser');
const {ObjectID} = require('mongodb');


//local imports
var{mongoose}=require('./db/mongoose');
var {Todo}=require('./models/todo');
var {User}=require('./models/user');

var app= express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

//create new todo
app.post('/todos',(req,res)=>{
var todo= new Todo({
  text: req.body.text
});
todo.save().then((doc)=>{
  res.send(doc);
},(e)=>{
  res.status(400).send(e);
});
});

//get all todos
app.get('/todos',(req,res)=>{
  console.log('test');
  Todo.find().then((todos)=>{
    res.send({todos})
  },(e)=>{
    res.status(400).send(e);
  });
});

// GET /todos/1234324 by id
app.get('/todos/:id',(req,res)=>{
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
      return res.status(404).send();
 }

Todo.findById(id).then((todo)=>{
  if(!todo){
    return res.status(404).send();
  }

      res.send({todo});
}).catch((e)=>{
  res.status(400).send();
});

});


//get /todos/ by name

app.get('/name/:name', function (req,res) {
var name = req.params.name;
  Todo.find({text:name})
  .then(function (todo) {
    console.log(todo);
     res.send(todo);
  });
});





 //route for delete
app.delete('/todos/:id', (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Todo.findByIdAndRemove(id).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }

    res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  });
});

//Update with patch and lodash

app.patch('/todos/:id',(req,res)=>{
  var id= req.params.id;
  var body =_.pick(req.body,['text','completed']);

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  if (_.isBoolean(body.completed)&& body.completed) {
  body.completedAt = new Date().getTime();
  }else {
    body.completed=false;
    body.completedAt=null;
  }

  Todo.findByIdAndUpdate(id,{$set:body},{new:true}).then((todo)=>{
    if(!todo){
      return res.status(404).send();
    }
    res.send({todo});
  }).catch((e)=>{
    res.status(400).send();
  })
});

app.listen(port,()=>{
console.log(`Started on port ${port}`);
});

module.exports={app};
