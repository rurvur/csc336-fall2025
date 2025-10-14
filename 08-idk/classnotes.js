let arr = ["cat", "dog", "ant", "rat", "vole"]
console.log(arr);

//Remove top element from array
arr.pop();
console.log(arr);

arr.push("vole");
//Start at first number index, remove second number elements
arr.splice(2, 2);
console.log(arr);

//Behold the three loops
arr.forEach(val => {
    console.log(val);
})

for (let val of arr) {
    console.log(val);
}

//This is the one I have been using so far :>
for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

let arr2 = [1, 3, 2, 2, 7, 8, 1];

//Returns true for each value less than 3
let lessThan3 = arr2.filter(el => el < 3);
console.log(lessThan3);

//Add 10 to each element
let addTen = arr2.map(el => el + 10);
console.log(addTen);

//arr2.sort(); also works. Do b-a for reverse order!
arr2.sort( (a, b) => a - b);
console.log(arr2);