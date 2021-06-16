var ncrypter = require('./index');

//use encode on your frontend with level and secret key
var encodedString = ncrypter.encrypt(2, 'mysecret1')

//use decode on your backend with same level and secret
var decodedString = ncrypter.decrypt(encodedString, 2, 'mysecret1');


/** How does level work?
 * Level creates a new encrypt value based on time, 
 * 
 * Level 1 - Every second a new encoded string will be returned
 * Level 2 - Every minute
 * Level 3 - Every Hour
 * 
 * Upto level 5 supported, for basic unprotected authentication, level 2 will do the trick and is the default value
 * 
 */

console.log('permission granted -->', decodedString);
