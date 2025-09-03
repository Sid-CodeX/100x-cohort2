// Filtering
// Given an array, give back all the even values from it

function filterLogic(n) {
    if(n % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}

const arr = [1, 2, 3, 4, 5];

// using for loop
const newArr = [];
for(let i = 0; i < arr.length; i++) {
    if(filterLogic(arr[i])) {
        newArr.push(arr[i]);
    }
}
console.log(newArr);

// Using filter function
const ans = arr.filter(filterLogic);
console.log(ans);

// Another way of writing the same thing using anonymous function
const ans2 = arr.filter(function(n) {
    return n % 2 == 0;
});
console.log(ans2);

// using arrow function
const ans3 = arr.filter((n) => {
    n % 2 == 0;
});
console.log(ans3);