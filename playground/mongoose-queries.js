const{ObjectID}=require('mongodb')

const{mongoose}=require('./../server/db/mongoose');
const{Todo}=require('./../server/models/todo');
const{User}=require('./../server/models/user');

// var id='5a1d80efb601aff82e5f25f4';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id:id
// }).then((todos)=>{
//   console.log('Todos',todos);
// });
//
// //if you want to find one doucoment by other than just id use findOne()
// Todo.findOne({
//   _id:id
// }).then((todo)=>{
//   console.log('Todo',todo);
// });

//if you want to find one doucoment by id use findById()
// Todo.findById(id).then((todo)=>{
//   if(!todo){
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id',todo);
// }).catch((e)=> console.log(e));

//check the docs mongoose queires

//chalenge
//case 1 query works but no users
//case 2 - user was found
//case3 -error

var userId='5a1bd03109e95b4823070fca';

User.findById(userId).then((user)=>{
  if(!user){
    return console.log('User not found');
  }

  console.log(JSON.stringify(user,undefined,2));
},(e)=>{
console.log(e);
});
