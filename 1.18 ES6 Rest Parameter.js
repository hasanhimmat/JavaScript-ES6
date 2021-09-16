// Add with Rest Parameter
function something(...numbers){
    let temp = 0;
    for(i of numbers){
        temp += i;
    }
    // result
    console.log('Your result is:', temp);
}

something(10,3,27,6,44,10);