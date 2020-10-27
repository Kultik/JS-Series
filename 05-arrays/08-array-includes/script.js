// 05-arrays/08-array-includes/script.js - 5.8: presence in an aray

(() => {
  const fruits = [
    "apple",
    "perry",
    "strawberry",
    "tomato",
    "kiwi",
    "banana",
    "orange",
    "mandarin",
    "durian",
    "peach",
    "grapes",
    "cherry",
  ];

  // your code here

  let run = document.getElementById("run");

  run.addEventListener("click", function () {
    console.log(fruits.includes("apple"));
  });

  //   run.addEventListener("click", () => {
  //     if (fruits.includes("apple")) {
  //       console.log("yes");
  //     } else {
  //       console.log("no");
  //     }
  //   });

  // THROUGH A BOOOHOOOLEAAAAAAAAN

  //   run.addEventListener("click", function () {
  //     const yolo = Boolean(fruits.find((fruit) => fruit == "apple"));
  //     console.log(yolo);
  //   });
})();
