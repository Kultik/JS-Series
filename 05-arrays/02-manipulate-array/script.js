// 05-arrays/02-manipulate-array/script.js - 5.2: manipulate array

(() => {
  let fruits = [
    "pomme",
    "poire",
    "fraise",
    "tomate",
    "orange",
    "mandarine",
    "durian",
    "pêche",
    "raisin",
    "cerise",
  ];

  // your code here

  let run = document.getElementById("run");
  fruits.shift(); //remove first
  fruits.pop(); // remove last
  fruits.splice(3, 1); // removed orange (newly indexed after shift) (index 3 , 1 item)
  fruits.push("kiwi");
  fruits.splice(0, 0, "BANANAAAAA"); // index, no of removed (0) if you only want to add and finally, the item name
  fruits.splice(2, 0, "dragon fruit"); //extra

  //   fruits.splice("pomme");

  run.addEventListener("click", function () {
    alert(fruits);
  });
})();
