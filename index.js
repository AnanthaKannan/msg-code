const messages = require('./msg.json')
module.exports ={
    msg
}

// console.log(msg('SM004'));
function msg(msgCode){
    const getMessages = messages[msgCode];
    if(getMessages) return { 'code': msgCode, 'msg': getMessages };
    else return { 'code':msgCode, 'msg': 'Your message code is not defined.'};
}