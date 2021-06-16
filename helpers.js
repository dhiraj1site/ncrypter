var helper = {};

helper.getEncodeString = function(level, secret) {
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