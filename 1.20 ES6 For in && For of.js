// For of && For in
var family = ['Hasanur', 20, false, relative={name: ['A. Hasib']}];

// Value Way
for(var single of family){
    console.log(typeof single);
}

// // Old Way
// for(var i = 0; i<family.length; i++){
//     console.log(family[i]);
// }

// // Key Way
// for(var val in family){
//     console.log(family[val]);
// }