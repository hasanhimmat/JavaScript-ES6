// Old recaps in  JavaScript ES6

// strict mode
'use strict';
var my_name;
my_name = 'Hasanur Rahman\n';
console.log(my_name);

// for of
var familyMember = ['Hasan Banu', 'Sopna Begum', 'Nupur Akter', 'Nuruzzaman', 'Hasan'];

console.log(familyMember);


// for of
var member; // define member it's strict mode
for(member of familyMember){
    console.log(member);
}

// Line Break
console.log('\n');

// for in
var i;
for(i in familyMember){
    console.log(familyMember[i]);
}

// Line Break
console.log('\n');

// Array de-structuring
const[,,,vai,ami] = familyMember;
console.log(vai);
console.log(ami);