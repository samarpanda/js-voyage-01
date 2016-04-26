/**
 * ES6 class
 */
// ES6 inheritance
class Hello {
  constructor(name){
    this.name = name;
  }
  hello(){
    return `Hello ${this.name}!`;
  }
  static sayHelloAll(){
    return 'Hello Everyone !';
  }
}

class HelloWorld extends Hello {
  constructor(){
    super('World');
  }

  echo(){
    return super.hello();
  }
}

var hw = new HelloWorld();
console.log(hw.echo());//=>Hello World!

console.log(Hello.sayHelloAll());//=>Hello Everyone!