function multiplyBy2(i) {
    return i * 2;
}

const arr = [1, 2, 3, 4, 5];

// using for loop
const newArr = [];
for(let i = 0; i < arr.length; i++) {
    newArr.push(multiplyBy2(arr[i]));
}
console.log(newArr);

// using map function
const ans = arr.map(multiplyBy2);
console.log(ans);

// another way of writing the same thing using anonymous function
const ans2 = arr.map(function(i) {
    return i * 2;
});
console.log(ans2);