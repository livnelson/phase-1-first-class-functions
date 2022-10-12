function sayHello() {
    console.log('hello');
}
// sayHello();

function callSayHello() {
    sayHello();
}
// callSayHello();

function callACallback(callback) {
    callback();
}
callACallback(callSayHello);
callACallback(4);

function receivesAFunction(functionName) {
    functionName();
}

function returnsANamedFunction() {
    return receivesAFunction;
}

function returnsAnAnonymousFunction() {
    return function(){
        
    } 
}