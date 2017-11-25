// const MongoClient =require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb')


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

//deleteMany
// db.collection('Todos').deleteMany({text:'Eating breakfest'}).then((result)=>{
//   console.log(result);
// });
//deleteOne
// db.collection('Todos').deleteOne({text:'Learn React'}).then((result)=>{
//   console.log(result);
// })

//findOneAndDelete
// db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
//   console.log(result);
// })


//challenge
//1.1 delete many
db.collection('Users').deleteMany({name:'Noam'}).then((result)=>{
  console.log(result);
});

//1.2 find one and delete
db.collection('Users').findOneAndDelete({
  _id:new ObjectID('5a187b67cf5f7b26501d6b83')}).then((result)=>{
    console.log(result);
  });
  // db.close();
});
