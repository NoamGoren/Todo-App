
// const MongoClient =require('mongodb').MongoClient;

const {MongoClient,ObjectID}=require('mongodb')


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text:'Clean My Room',
  //   completed:false
  // },(err,result)=>{
  //   if (err) {
  //     return console.log('Unable to insert todo');
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });

  //insert new doc into the Users (name,age,location)
// db.collection('Users').insertOne({
//   name:'Noam',
//   age:28,
//   location:"Gan Ner"
// },(err,result)=>{
//   if (err) {
// return console.log('Unable to insert data to users');
//   }
//   console.log(result.ops[0]._id.getTimestamp());
// })

  db.close();
});
