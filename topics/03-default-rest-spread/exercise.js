/**
 * Default parameter ES5
 */
function f1(x){
  var y = arguments.length <= 1 || arguments[1] === undefined ? 12 : arguments[1];
  return x + y;
}
console.log(f1(3) === 15);

/**
 * ES5 arguments property
 */
function f2(x){
  return x * (arguments.length - 1);
}
console.log(f2(3, "Yo", true));

/**
 * ES5 function's apply property
 */
function f3(x, y, z){
  return x + y + z;
}
console.log(f3.apply(undefined, [1, 2, 3]))