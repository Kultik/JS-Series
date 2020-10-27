// 05-arrays/11-dedupe-array/script.js - 5.11: de-dupe the array

(() => {
  const fruits = [
    "cerise",
    "durian",
    "pomme",
    "poire",
    "fraise",
    "tomate",
    "orange",
    "mandarine",
    "fraise",
    "durian",
    "pêche",
    "cerise",
    "raisin",
    "cerise",
  ];

  // your code here
  let run = document.getElementById("run");
  run.addEventListener("click", function () {
    unique = [...new Set(fruits)];
    console.log(unique); // has to be inside
  });

  // ANOTHER WAY = same result

  //   document.getElementById("run").addEventListener("click", function () {
  //     myfruits = fruits;
  //     var mySet = new Set(myfruits);
  //     myfruits = [...mySet];
  //     console.log(myfruits);
  //   });
})();
