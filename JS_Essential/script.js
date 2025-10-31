// Fundamentals of JS
// Array and Objects
// Function in return
// async and await


// Must know the concepts of the 
// 1. Foreach
// 2. Map
// 3. Filter
// 4. Reduce
// 5. Find
// 6. FindIndex


const arr = [1,2,3,4,5,6,7,8,9,10];

// use forEach()

// arr.forEach(function(val){
//     console.log(val + " Hello");
// })

// use map()
const ans = arr.map(function(val){
    return val + 12;
})

// console.log(ans);

// use filter()

const arrFilter = arr.filter(function(val){
    if(val >= 6) return true;
    else return false;
})

console.log(arrFilter);
