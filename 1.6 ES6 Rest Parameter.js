// function add(...numbers){
//     let sum = 0;
//     for(let i of numbers){
//         sum = sum + i;
//     }
//     console.log(sum);
// }

// add(23,7);

// // Array
// var friendList = ['Sujon', 'Jony', 'Nazmul'];
// for(let i of friendList){
//     console.log(i);
// }


// Old calculation process
// Array
let numbers = [13,27,50,5,1,4];
let numLen = numbers.length;
console.log('Your array length is', numLen);

let temp = 0;
// Loop
for(let i = 0; i < numLen; i++){
    temp += numbers[i];
}
// Output
console.log('Our Result is', temp);


// Rest parameter in JavaScript
function mathCal(...numbers){
    let result = 0;
    for(i of numbers){
        result += i;
    }
    console.log('Your result is', result);
}


mathCal(3,8,9);