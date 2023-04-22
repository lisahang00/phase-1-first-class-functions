function receivesAFunction(callback) {
    console.log(callback());
}

function returnsANamedFunction(Spy) {
    return function receivesAFunction(callback){Spy};
}

function returnsAnAnonymousFunction() {
    return function() {};
}

function anonymous() {
    return "";
}
