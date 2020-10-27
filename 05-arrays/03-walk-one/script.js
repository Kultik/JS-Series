// 05-arrays/01-get-element/script.js - 5.1: walk through the list

(() => {
  let fruits = [
    "apple",
    "pear",
    "raspberry",
    "tomatos",
    "kiwi",
    "banana",
    "orange",
    "mandarin",
    "durian",
    "peache",
    "grap",
    "cherry",
  ];

  // your code here

  let run = document.getElementById("run");

  //   run.addEventListener("click", function () {
  //     for (let i = 0; i < fruits.length; i++) {
  //       console.log(fruits[i]);
  //     }
  //   });

  run.addEventListener("click", function () {
    for (let elem of fruits) {
      console.log(elem);
    } // the curly brackets can be removed, gives out the same result
  });
})();
