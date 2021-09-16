// Array map
var myMap = new Map();
myMap.set('bd', 'Bangladesh');
myMap.set('ind', 'India');
myMap.set('sri', 'Sri Lanka ');
myMap.set('us', 'United States');
myMap.set('uk', 'United Kingdom');

// console.log(myMap.keys())
// console.log(myMap.values());

for(key of myMap.keys()){
    console.log(key)
}

// Line break
console.log('\n');

for(value of myMap.values()){
    console.log(value)
}