# ncrypter
A simple package to encrypt/decrypt secret keys across different platforms based on time elapsed

# Installation
npm install ncrypter

# Usage
```node
var ncrypter = require('ncrypter');

//use encode on your frontend with number of second you want it to change and the secret key
var encodedString = ncrypter.encrypt(2, 'mysecret1')

//use decode on your backend with same number of second and the same secret
var decodedString = ncrypter.decrypt(encodedString, 2, 'mysecret1');

console.log('permission granted -->', decodedString);

```
