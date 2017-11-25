
// const MongoClient =require('mongodb').MongoClient;

const {MongoClient,ObjectID}=require('mongodb')


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');


// db.collection('Todos').find({
//   _id:new ObjectID('5a192a57eca0a22147256928')
// }).toArray().then((docs)=>{
//   console.log('Todos');
//   console.log(JSON.stringify(docs,undefined,2));
// },(err)=>{
//   console.log('Unable to fetch todos');
// });


//count method

// db.collection('Todos').find().count().then((count)=>{
//   console.log(`Todos count: ${count}`);
//
// },(err)=>{
//   console.log('Unable to fetch todos');
// });

//chalenge
db.collection('Users').find({name:'Noam'}).toArray().then((docs)=>{
  console.log('Users');
  console.log(JSON.stringify(docs,undefined,2));
},(err)=>{
  console.log('unable to fetch data');
});


  // db.close();
});
