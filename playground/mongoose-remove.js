const{ObjectID}=require('mongodb')

const{mongoose}=require('./../server/db/mongoose');
const{Todo}=require('./../server/models/todo');
const{User}=require('./../server/models/user');

// Todo.remove({}).then((result)=>{
//   console.log(result);
// });

// Todo.findOneAndRemove
//Todo.findByIdAndRemove

Todo.findOneAndRemove({_id:'5a1edde9cee89f8b1c2c332e'}).then((todo)=>{

});

Todo.findByIdAndRemove('5a1edde9cee89f8b1c2c332e').then((todo)=>{
console.log(todo);
});
