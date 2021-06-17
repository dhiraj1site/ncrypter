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
    var date = new Date();
    var time = (date.getSeconds() - (date.getSeconds() % level)).toString();
    return time + secret;
}


module.exports = helper;