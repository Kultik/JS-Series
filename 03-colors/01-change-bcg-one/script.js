// 03-colors/01-change-bcg-one/script.js - 3.1: Bcg one (1)

(() => {
  let body = document.getElementsByTagName("body");

  const changeColor = (color) => {
    //const and let give out the same thing
    switch (color) {
      case "red":
        document.body.style.backgroundColor = "red";
        break;
      case "green":
        document.body.style.backgroundColor = "green";
        break;
      case "yellow":
        document.body.style.backgroundColor = "yellow";
        break;
      case "blue":
        document.body.style.backgroundColor = "blue";
        break;
    }
  };

  Array.from(document.querySelectorAll("button")).forEach(($btn) =>
    $btn.addEventListener("click", () => (changeColor($btn.id), false))
  );
})();

//   let body = document.getElementsByTagName("body");

//   const changeColor = (color) => {
//     switch (color) {
//       case "red":
//         document.body.style.backgroundColor = "red";
//         break;
//       case "green":
//         document.body.style.backgroundColor = "green";
//         break;
//       case "yellow":
//         document.body.style.backgroundColor = "yellow";
//         break;
//       case "blue":
//         document.body.style.backgroundColor = "blue";
//         break;
//     }
//   };

//   Array.from(document.querySelectorAll("button")).forEach(($btn) =>
//     $btn.addEventListener("click", () => (changeColor($btn.id), false))
//   );

// ANOTHER WAY

//   const body = document.getElementsByTagName("body");
//   const red = document.getElementById("red");
//   const blue = document.getElementById("blue");
//   const green = document.getElementById("green");
//   const yellow = document.getElementById("yellow");

//   red.addEventListener("click", function () {
//     body.style.background = "red";
//   });
//   blue.addEventListener("click", function () {
//     body.style.background = "blue";
//   });
//   green.addEventListener("click", function () {
//     body.style.background = "green";
//   });
//   yellow.addEventListener("click", function () {
//     body.style.background = "yellow";
//   });
// })();
