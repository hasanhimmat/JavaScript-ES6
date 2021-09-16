// Object in JavaScript

let self_info = {
    name: 'Hasanur Rahman',
    age: 20,
    height: 5.9,
    job: false,
    //Nested Object in JavaScript
    wife: {
        name: 'Nai',
        age: 'I don\'t know',
        address: 'Bangladesh'
    }
}

// Object output
console.log(self_info.name); // Dot Notation
console.log(self_info.age);
console.log(self_info.height);
console.log(self_info.job);
// Nested object
console.log(self_info.wife.name);
console.log(self_info.wife.age);

// console.log(self_info.wife.address);
console.log(self_info['wife']['address']); // Array Notation
