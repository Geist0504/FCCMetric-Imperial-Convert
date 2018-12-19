/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var regex = /[a-zA-Z]/gi;
    let doubleFraction = /([^\/]*\/[^\/]*){2}/
    let firstChar = input.match(regex)[0]
    let numeric = input.slice(0,input.indexOf(firstChar))
    let failure = numeric.match(doubleFraction);
    if(failure){
      return 'invalid number'
    }
    else{
      if(numeric == ''){
        numeric = 1
      }
      let result = eval(numeric)
      return result;
    }
  };
  
  this.getUnit = function(input) {
    var regex = /[a-zA-Z]+$/g;
    let validInputs = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
    let result = input.match(regex)[0]
    console.log(result)
    if (validInputs.includes(result)){
      return result
    }
    else{
      return 'invalid input'
    }
  };
  
  this.getReturnUnit = function(initUnit) {
    let map = {
      'gal':'l',
      'l':'gal',
      'lbs':'kg',
      'kg':'lbs',
      'mi':'km',
      'km':'mi'
    }
    let result = map[initUnit.toLowerCase()];
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    let map = {
      'gal': 'gallons',
      'l':'liters',
      'lbs':'pounds',
      'kg':'kilograms',
      'mi':'miles',
      'km':'kilometers'
    }
    
    let result = map[unit.toLowerCase()];
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    const map = {
      'gal':'3.78541',
      'l':'1/3.78541',
      'lbs':'0.453592',
      'kg':'1/0.453592',
      'mi':'1.60934',
      'km':'1/1.60934'
    }
    
    var result = initNum * eval(map[initUnit.toLowerCase()]);
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result = "${initNum} ${initUnit} converts to ${returnNum}${returnUnit}"
    
    return result;
  };
  
}

module.exports = ConvertHandler;
