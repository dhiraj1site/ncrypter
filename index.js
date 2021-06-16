var browser = require('./browser');
var node = require('./node');
const ncrypter = {};

// distinguish if the request is for node or frontend browser
const useEncryptMode = typeof atob === 'function' ? browser.encrypt : node.encrypt;
const useDecryptMode = typeof atob === 'function' ? browser.decrypt : node.decrypt;

ncrypter.encrypt = function(level, secret, encoding) {
    return useEncryptMode(level, secret, encoding)
}

ncrypter.decrypt = function(encryptedString, level, secret, encoding) {
    return useDecryptMode(encryptedString, level, secret, encoding)
}


module.exports = ncrypter;