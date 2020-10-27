// 05-arrays/13-find-in-set/script.js - 5.13: Find in a Set

(() => {
  const people = new Set([ // creates a new set object
    "Nicolas",
    "Nick",
    "Leny",
    "Alexandre",
    "Charlène",
    "Laureline",
    "Esther",
    "Simon",
    "Lucas",
  ]);

  let run = document.getElementById("run");

  run.addEventListener("click", function () {
    console.log(people.size); // size
    console.log(people.has("Alexandre")); // returns true or false
  });
})();
