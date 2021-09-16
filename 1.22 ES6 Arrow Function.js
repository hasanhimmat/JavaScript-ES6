// Arrow function
let add = (a,b)=>{
    console.log('Your result is:', (a+b));
}

add(1,4);


let addCal = (...numbers)=>{
    let sum = 0;
    for(number of numbers){
        sum += number;
    }
    // result

    // console.log('Your result is:', sum);
    return 'Your result is ' + sum;
}

// addCal(1,7,8);
console.log(addCal(3,8,9));