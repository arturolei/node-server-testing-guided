function add(a,b){
    return a + b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b) {
    return a/b;
}

function add_super() {
    let nums = arguments;
    let tots = 0;
    for (let i = 0; i <arguments.length;i++){
        tots += nums[i];
    }
    return  tots;
}

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    add_super
}