//ES5
var list = document.getElementById("app");

for (var i = 1; i <= 5; i++) {
  var item = document.createElement("LI");
  item.appendChild(document.createTextNode("Item " + i));

  var j = i;
  item.onclick = function (ev) {
    console.log("Item " + j + " is clicked.");
  };

  list.appendChild(item);
}

/*
(function(j){
  item.onclick = function (ev) {
  console.log("Item " + j + " is clicked.");
  };
})(i);
*/