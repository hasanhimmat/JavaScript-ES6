// Array map method
var myMap = new Map();
myMap.set('bd', 'Bangladesh');
myMap.set('ind', 'India');
myMap.set('sri', 'Sri Lanka ');
myMap.set('us', 'United States');
myMap.set('uk', 'United Kingdom');

// console.log(myMap.keys())
// console.log(myMap.values());

myMap.delete('ind');
myMap.delete('uk');

// myMap.clear();
console.log(myMap.get('bd'));

// has method
if(myMap.has('bd')){
    console.log('Yes');
}else{
    console.log('No');
}

// output
for(value of myMap.values()){
    console.log(value)
}