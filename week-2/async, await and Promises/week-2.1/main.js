/*function myOwnSetTimeoutFn(callback, duration) {
    setTimeout(callback, duration);
} 

function onDone() {
    console.log("Hello world");
}

function promisifed() {
    const p = new Promise(function(resolve) {
        setTimeout(function() {
            resolve();
        }, 3000);
    });
    return p;
} 

myOwnSetTimeoutFn(function() {
    console.log("after wait");
}, 1000);

const ans = promisifed().then(onDone);
console.log(ans);
for(let i = 0; i < 100000; i++) {
    i++;
}
console.log("after for loop");
console.log(ans);

const ans2 = promisifed(1000);
ans.then(function() {
    console.log()
});

*/
function myOwnSetTimeoutFn(callback, duration) {
    setTimeout(callback, duration);
}

myOwnSetTimeoutFn(function() {
    console.log("Hello world");
}, 1000);

function onDone() {
    console.log("Hello world");
}
function promisifed() {
    const p = new Promise(function(resolve) {
        setTimeout(function() {
            resolve();
        }, 3000);
    });
    return p;
}

function main() {
    promisifed().then(onDone);
}

main();