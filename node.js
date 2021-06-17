const helper = require('./helpers');

const node = {};

node.encrypt = function(level = 3, secret = 'ncrypter', encoding = 'base64') {
        var enocderString = helper.getEncodeString(level, secret);
        if(encoding == 'base64') {
            return Buffer.from(enocderString).toString('base64');
        }
        if(encoding == 'utf-8') {
            return encodeURIComponent(enocderString);
        }
    }

node.decrypt = function(encryptedString, level = 3, secret = 'ncrypter', encoding = 'base64') {
    var enocderString = helper.getEncodeString(level, secret);
    if(encoding == 'base64') {
        let encodedString =  Buffer.from(encryptedString, 'base64').toString();
        return enocderString === encodedString;
    }

    if(encoding == 'utf-8') {
        let encodedString =  decodeURIComponent(encryptedString);
        return enocderString === encodedString;
    }
}

module.exports = node;