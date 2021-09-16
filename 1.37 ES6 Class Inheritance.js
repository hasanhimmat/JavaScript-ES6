// Class inheritance
class Parent{
    // addition subtraction multiplication division worksheets
    addition(a,b){
        console.log('Your addition result is:', (a+b))
    }

    subtraction(a, b){
        console.log('Your subtraction result is:', (a-b))
    }


    multiplication(a, b){
        console.log('Your multiplication result is:', (a*b))
    }

    division(a, b){
        console.log('Your division result is:', (a/b))
    }

}

var baba = new Parent;
baba.addition(1,8);


// Inheritance
class Child extends Parent{
    // function or method
    whatsNumber(number){
        if(number % 2 == 0){
            console.log('This is Even Number');
        }else if(number % 2 == 1){
            console.log('This is Odd Number');
        }else{
            console.log('Something is wrong');
        }
    }
}

var puttro = new Child;
puttro.addition(3,8);
puttro.subtraction(8,8);
puttro.multiplication(8,8);
puttro.division(24,8);
puttro.whatsNumber(4)