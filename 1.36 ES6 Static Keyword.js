// Static keywords
class Human{
   sayHi(input){
        console.log('Hello', input, 'How are you?\n')
    }
}

var hello = new Human;
hello.sayHi('Hasan');


// static property relation directly in class no object
class Human1{
    static sayHi(input){
         console.log('Hello', input, 'How are you?\n')
     }
 }
 
 var hello1 = new Human1;
Human1.sayHi('Hasan Himmat');