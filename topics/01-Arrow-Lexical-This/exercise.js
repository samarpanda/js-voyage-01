/**
 * ES5
 * Lets implement this with ES6 fat arrow
 */
var result = [1,2,3].map(function(n){
  return n * 2;
});
console.log(result);

/**
 * ES5
 * Operating with this
 */
function doSomething(service){
  this.foo = 'Hello';
  var self = this;
  service.something(function(){
    // console.log(this.foo)
    console.log(self.foo);
  });
}

var obj = new doSomething({
  something: function(cb){
    cb();
  }
});