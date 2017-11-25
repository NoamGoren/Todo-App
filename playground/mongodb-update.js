// const MongoClient =require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb')


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

// db.collection('Todos').findOneAndUpdate({
//   _id:new ObjectID('5a193d60eca0a22147256c65')
// },{
//   $set:{
//     completed:true
//   }
// },{
//   returnOriginal : false
// }).then((result)=>{
//   console.log(result);
// });

//challenge update user age with $inc

db.collection('Users').findOneAndUpdate({
  _id:new ObjectID('5a187ad387e1db2c1853d752')
},{
  $inc:{
    age:1
  }
},{
  returnOriginal:false
}).then((result)=>{
  console.log(result);
});

  // db.close();
});
