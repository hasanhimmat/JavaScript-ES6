// Super Keyword
// Class inheritance
class Bro{
    mobile(myName){
        console.log('My name is:', myName)
    }
}


// inheritance
class Coto extends Bro{

    // super keyword
  android(myName){
      super.mobile(myName);
  }

}

var cotoVai = new Coto;
cotoVai.android('Hasanur Rahman')
