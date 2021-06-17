var helper = {};

function obfuscateString(plaintext) {
    var obfuscated = "";

    for (var i = 0; i < plaintext.length; i++) {
      obfuscated += "\\u00" + plaintext.charCodeAt(i).toString(16);
    }

    return obfuscated;
}

helper.getEncodeString = function(level, secret) {
    secret = obfuscateString(secret);
    switch(level) {
        case 1: 
            return new Date().getSeconds().toString() + secret;
        case 2: 
            return new Date().getMinutes().toString() + secret;
        case 3: 
            return new Date().getHours().toString() + secret;
        case 4: 
            return new Date().getDay().toString() + secret;
        case 5:
            return new Date().getMonth().toString() + secret;
        default: 
            return new Date().getMinutes().toString() + secret;
    }

}


module.exports = helper;