// Variable hoisting
my_name = "Hasanur Rahman";
console.log("My named is", my_name);
var my_name;


// Hoisting
function add(){
    console.log(opt);
    var opt = "Hi"; // Hoisting
} 

add();