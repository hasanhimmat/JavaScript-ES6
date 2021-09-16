// ES6 Set
var country = new Set();
country.add('Bangladesh');
country.add('India');
country.add('Nepal');
country.add('Bhutan');
country.add('Bangladesh'); // duplicate
country.add('India'); // duplicate

console.log(country);

// Duplicate value not allow ES6 set

// Set receiving array
var alphabet = new Set(['A','B','A','D','E','C','E']);
console.log(alphabet);