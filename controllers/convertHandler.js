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
    if (validInputs.contains(result)){
      return result
    }
    else{
      return 'invalid input'
    }
  };
  
  this.getReturnUnit = function(initUnit) {
    let map = {
      'gal':'L',
      'L':'gal',
      'lbs':'kg',
      'kg':'lbs',
      'mi':'km',
      'km':'mi'
    }
    let result = map[initUnit];
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
