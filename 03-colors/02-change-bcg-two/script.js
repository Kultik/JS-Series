// 03-colors/02-change-bcg-two/script.js - 3.2: Bcg 2

// your code here
(() => {
  let body = document.body;
  let color = document.getElementById("color");
  let run = document.getElementById("run");

  run.addEventListener("click", function () {
    body.style.backgroundColor = color.value;
  });
})();
