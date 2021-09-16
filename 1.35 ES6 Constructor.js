// Class constructor
class Calculator{
    constructor(a, b){
        this.firstNum = a;
        this.secondNum = b;
    }

    add(){
        let result = this.firstNum + this.secondNum;
        console.log('Your result now', result);
    }
}

var sum = new Calculator(23,7);
sum.add()