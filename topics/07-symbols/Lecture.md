## Clouser solution

[Why Symbols are introduced in Javascript](http://stackoverflow.com/questions/21724326/why-bring-symbols-to-javascript)

```js
var Pet = (function() {
  function Pet(type) {
    this.getType = function(){
      return type;
    };
  }
  return Pet;
}());

var b = new Pet('dog');
console.log(b.getType());//dog

//Modified outside
b.type = null;

//Stays private
console.log(b.getType());//dog
```