// Class inheritance
class Bro{
    mobile(myName){
        console.log('My name is:', myName)
    }
}

var broVai = new Bro;
broVai.mobile('Md. Nuruzzaman\n');


// inheritance
class Coto extends Bro{
    // overwrite parent function or method
    mobile(name){
        console.log('I am use:', name)
    }

    sayHi(user){
        console.log('Hello', user, '\nHow are you?\n');
    }
}


var cotoVai = new Coto;
cotoVai.sayHi('Jony')

cotoVai.mobile('Redmi 6A')