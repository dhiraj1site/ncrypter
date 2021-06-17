var ncrypter = require('./index');

//use encode on your frontend with seconds and secret key
var encodedString = ncrypter.encrypt(2, 'mysecret1')
console.log('always', encodedString)
//use decode on your backend with same seconds and secret
var decodedString = ncrypter.decrypt(encodedString, 2, 'mysecret1');

console.log('permission granted -->', decodedString);
