function soma () {
    var res = arguments[0];
    if (arguments.length>1){
        for (var i=1;i<arguments.length;i++){
            res += arguments[i];
        }
    }
    return res;
}

function sub () {     
    var res = arguments[0];
    if (arguments.length>1){
        for (var i=1;i<arguments.length;i++){
            res -= arguments[i];
        }
    }
    return res;
}

function mult () {
    var res = arguments[0];
    if (arguments.length>1){
        for (var i=1;i<arguments.length;i++){
            res *= arguments[i];
        }
    }
    return res;
}

function div () {
    var res = arguments[0];
    if (arguments.length>1){
        for (var i=1;i<arguments.length;i++){
            res /= arguments[i];
        }
    }
    return res;
}



module.exports = {
    soma,
    sub,
    mult,
    div
}