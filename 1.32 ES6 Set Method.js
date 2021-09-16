var friends = new Set;
friends.add('Jony');
friends.add('Sujon');
friends.add('Abid');
friends.add('Belal');
friends.add('Mishrat');
friends.add('Nazmul');

// friends.clear(); // clear method

// delete method
friends.delete('Abid');
friends.delete('Mishrat');
friends.delete('Belal');

// has method
if(friends.has('Sujon')){
    console.log('Your friend now available');
}else{
    console.log('Your friend now not available');
}

// values method
console.log(friends.values());


// output
console.log(friends);

// size method
console.log(friends.size);