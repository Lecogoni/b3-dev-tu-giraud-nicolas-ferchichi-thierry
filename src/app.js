const prompt = require('prompt');

class Calcultrice {

  inputArray = [];
  operations = ["x", "/", "+", "-", "%", "V", "&"];
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
    this.fixFloat();

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
    if(this.inputArray[1] === '%'){
      this.result = this.pourcentage(this.inputArray[0], this.inputArray[2])
    }
    if(this.inputArray[1] === 'V'){
      this.result = this.squareRoot(this.inputArray[0])
    }
    if(this.inputArray[1] === '&'){
      this.result = this.square(this.inputArray[0])
    }

    return this.result;
  }

  isInteger(f){
    return typeof(f)==="number" && Math.round(f) == f;
  } 

  isFloat(f){ 
    return typeof(f)==="number" && !this.isInteger(this.result); 
  }

  fixFloat(){
    if(this.isFloat(this.result)){
      this.result = this.result.toFixed(1);
    }
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

  pourcentage(a,b){
    return (a * b) / 100
  }
  
  squareRoot(a) {
    return Math.sqrt(a);
  }

  square(a) {
    return a*a;
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


