


//ES6
var result = [1,2,3].map(n => n * 2);
console.log(result);



/**
 * ES6
 * Lexical scoping of this
 */
function doSomething(service){
  this.foo = 'Hello'
  service.something(() => {
    console.log(this.foo);
  });
}

var obj = new doSomething({
  something: (cb) => {
    cb();
  }
});

const cme = 20;
// const cmd = 30;// => throws exception

const me = {};
me.bar = 42;
console.log(me.bar);//=> 42