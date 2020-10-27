// 03-colors/03-change-bcg-three/script.js - 3.3: background color (3)

(() => {
  let run = document.getElementById("run");
  let body = document.body;

  let setBg = () => {
    // let and const work
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    body.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;
  };
  run.addEventListener("click", setBg);
  setBg();

  //   let body = document.body;
  //   let letters = "0123456789ABCDEF";
  //   let color = "#";
  //   let run = document.getElementById("run");

  //   function randomColor() {
  //     for (let i = 0; i < 6; i++) {
  //       color += letters[Math.floor(Math.random() * 16)];
  //     }
  //     return color;
  //   }
  //   run.addEventListener("click", function () {
  //     body.style.backgroundColor = "#" + randomColor();
  //   });

  // your code here

  //   let body = document.body;
  //   let run = document.getElementById("run"); // fetching ID of button we know will operate the color switch

  //   run.addEventListener("click", function () {
  //     body.style.backgroundColor = "#" + randColor();
  //   });

  //   function randColor() {
  //     return (randHexaNum = Math.trunc(Math.random() * 16777215 + 1).toString(
  //       16
  //     ));
  //   }
})();
