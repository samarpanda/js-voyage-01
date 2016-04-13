/**
 * Problem
 */
var Pet = (function() {
  function Pet(type) {
    this.type = type;
  }
  Pet.prototype.getType = function() {
    return this.type;
  }
  return Pet;
}());

var a = new Pet('dog');
console.log(a.getType());//=> dog

//Modified outside
a.type = null;

console.log(a.getType());//=> undefined