// Array de-structuring
var education = ['PSC', 'JSC', 'SSC', 'HSC', 'BBA'];

// console.log(education); // output

const[primary,,highschool,,collage]= education;
console.log(primary);
console.log(highschool);
console.log(collage);