const helper = require('./helpers');

const browser = {};

browser.encrypt = function(level = 2, secret = 'ncrypter', encoding = 'base64') {
        var enocderString = helper.getEncodeString(level, secret);
        if(encoding == 'base64') {
            return btoa(enocderString);
        }
        if(encoding == 'utf-8') {
            return encodeURIComponent(enocderString);
        }
    }

    browser.decrypt = function(encryptedString, level = 2, secret = 'ncrypter', encoding = 'base64') {
    var enocderString = helper.getEncodeString(level, secret);
    if(encoding == 'base64') {
        let decodedString =  atob(encryptedString);
        return enocderString === decodedString;
    }

    if(encoding == 'utf-8') {
        let decodedString =  decodeURIComponent(encryptedString);
        return enocderString === decodedString;
    }
}

module.exports = browser;