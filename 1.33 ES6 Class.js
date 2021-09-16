// Class in JavaScript
class Human{
    sayHi(){
        console.log('Hello how are you?\n');
    }
}

// Making object
var hello1 = new Human;

// Call
hello1.sayHi();


// Parameter pass
class Hotel_ai{
    order(name){
        // console.log('Your order now process');
        console.log('Thank you for your order from Hotel Ai.' + '\nnow process your ' + name.toLowerCase() + '\n');
    }
}

var hotel = new Hotel_ai;
hotel.order('Tea');
hotel.order('7Up');