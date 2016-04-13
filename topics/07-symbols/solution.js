/**
 * Solution using ES6 Symbols
 */
var Pet = (function() {
  var typeSymbol = Symbol('type');
  function Pet(type) {
    this[typeSymbol] = type;
  }
  Pet.prototype.getType = function(){
    return this[typeSymbol];
  }
  return Pet;
}());

var a = new Pet('dog');

console.log(a.getType());//=> dog

a.type = null;

//stays private
console.log(a.getType());//=> dog