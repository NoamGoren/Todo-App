const{SHA256} =require ('crypto-js');
const jwt = require('jsonwebtoken');

// jwt.sign takes the object and sign it,create hash and return the token value
// jwt.verify take the token and make sure the data was not manipullated

var data={
  id:10
};
var token = jwt.sign(data,'123abc');

var decoded= jwt.verify(token,'123abc');
// console.log(decoded);
//
//
//
//
var message ='I am user number 3';
var hash = SHA256(message).toString();

console.log(`Message:${message} `);
console.log(`Hash: ${hash}`);
//
// var data={
//   id:4
// };
//
// var token = {
//   //equvilvent to data:data es6
//   data,
//   hash:SHA256(JSON.stringify(data)+'somesecret').toString()
// }
//
// token.data.id=5;
// token.hash=SHA256(JSON.stringify(token.data)).toString();
//
// var resultHash=SHA256(JSON.stringify(token.data)+'somesecret').toString();
//
// if (resultHash===token.hash) {
//   console.log('Data was not changed');
//
// }else {
//   console.log('Data was Changed. Do not trust!');
// }
