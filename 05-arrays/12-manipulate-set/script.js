// 05-arrays/12-manipulate-set/script.js - 5.12: manipulation of a Set

(() => {
  const fruits = new Set([
    "apple",
    "pear",
    "strawberry",
    "tomato",
    "orange",
    "mandarin",
    "durian",
    "peach",
    "grape",
    "cherry",
  ]);

  let run = document.getElementById("run");
  fruits.delete("apple");
  fruits.delete("cherry");
  fruits.add("banana");
  fruits.add("kiwi");

  run.addEventListener("click", () => {
    // diff annotation for function (arrow)
    console.log(fruits);
  });

  // your code here
})();
