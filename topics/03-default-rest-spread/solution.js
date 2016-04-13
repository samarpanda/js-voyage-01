/**
 * Default parameter ES6
 */
function f1(x, y=12) {
  return x + y;
}
console.log(f1(3) == 15)

/**
 * ES6 rest operator
 */
function f2(x, ...y){
  return x * y.length;
}
console.log(f2(3, "Yo", true));

/**
 * ES6 spread
 */
function f3(x, y, z){
  return x + y + z;
}
console.log(f3(...[1,2,3]));