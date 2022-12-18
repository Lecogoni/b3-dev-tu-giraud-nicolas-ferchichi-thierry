const prompt = require('prompt');

class Calcultrice {

  inputArray = [];
  operations = ["x", "/", "+", "-", "%"];
  number = "";
  result = 0;

  constructor() {
  }
  
  sortUserInput(op) {

    for (let i = 0; i < op.length; i++) {

      // false mean op[i] is a digit
      let testInput = this.operations.indexOf(op[i]) === -1 ? false : true;
      
      if(testInput == false){
        this.number += op[i]
      } else {
        this.inputArray.push(Number(this.number));
        this.inputArray.push(op[i]);
        this.number = "";
      }
      if(i == op.length - 1){
        this.inputArray.push(Number(this.number));
        this.number = "";
      }
    }

    this.calculate();

    return this.result;
  }


  calculate() {

    if(this.inputArray[1] === '+'){
        this.result = this.add(this.inputArray[0], this.inputArray[2])
    }
    if(this.inputArray[1] === '-'){
        this.result = this.sub(this.inputArray[0], this.inputArray[2])
    }
    if(this.inputArray[1] === '*'){
        this.result = this.multiply(this.inputArray[0], this.inputArray[2])
    }
    if(this.inputArray[1] === '/'){
        this.result = this.divide(this.inputArray[0], this.inputArray[2])
    }

    return this.result;
  }

  add(a,b) {
    return a + b;
  }

  sub(a,b) {
    return a - b;
  }

  multiply(a,b) {
    return a * b;
  }

  divide(a,b) {
    return a / b;
  }


}

function getUserInput() {
  return new Promise(resolve => {
      prompt.get(['op'], function (err, result) {
          if (err) {
            return onErr(err);
          }
          calc = new Calcultrice();
          resolve(calc.sortUserInput(result.op));
        });
        
        function onErr(err) {
          console.log(err);
        }   
  });
}


async function init() {
  console.log('Entrez une opération mathématique');
  const result = await getUserInput();
  console.log('le resultat est : ' + result);
}
    
init();


module.exports = {
    Calcultrice:Calcultrice
}


