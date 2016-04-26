var list = document.getElementById("app");

for (var i = 1; i <= 5; i++) {
  var item = document.createElement("LI");
  item.appendChild(document.createTextNode("Item " + i));

  let j = i;
  item.onclick = function (ev) {
    console.log("Item " + j + " is clicked.");
  };
  list.appendChild(item);
}

// const foo1 = 27;
// foo1 = 42;

// var foo = 27;
// foo.bar = 42;
// console.log(foo.bar);
// → `undefined`