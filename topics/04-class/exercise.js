// E5 prototypal inheritance implementation
function Hello(name){
  this.name = name;
}

Hello.prototype.hello = function hello(){
  return 'Hello ' + this.name + '!';
}

Hello.sayHelloAll = function(){
  return 'Hello Everyone!';
};

function HelloWorld(){
  Hello.call(this, 'World');
}

HelloWorld.prototype = Object.create(Hello.prototype);

HelloWorld.prototype.echo = function echo(){
  return Hello.prototype.hello.call(this);
};

var hw = new HelloWorld();
console.log(hw.echo());//=>Hello World!

console.log(Hello.sayHelloAll());//=>Hello Everyone!

