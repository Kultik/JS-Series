// 05-arrays/01-get-element/script.js - 5.1: item in array

(() => {
  let run = document.getElementById("run");

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

  run.addEventListener("click", function () {
    console.log(fruits[3]);
    alert(fruits[3]);
  });

  // your code here
})();
