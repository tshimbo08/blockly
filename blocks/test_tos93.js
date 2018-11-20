
console.log("start");

function setTimeoutAsync(delay) {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, delay);
    });
}

function myAsyncProcess1() {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, 1000);
    });
}

function myAsyncProcess2() {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, 1000);
    });
}

function myAsyncProcess3() {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, 1000);
    });
}


myAsyncProcess1()
            .then(function() {return myAsyncProcess2();})
            .then(function() {return myAsyncProcess3();})
            .then(function() {
                console.log("step3");
            });

console.log("end");
