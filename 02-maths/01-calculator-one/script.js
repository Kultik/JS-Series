// 02-maths/01-calculator-one/script.js - 2.1: calculator1

// let x = 0;
// let y = 0;
// let x and y below so no reload.

(() => {
  //wtf ?
  // to get the value of an input: document.getElementById("element-id").value

  let x = new Number(document.getElementById("op-one").value);
  let y = new Number(document.getElementById("op-two").value);

  document.getElementById("addition").addEventListener("click", function add() {
    // perform an addition
    // let c = 0;
    let add = x + y;
    alert(add);
  });

  document
    .getElementById("substraction")
    .addEventListener("click", function () {
      // perform an substraction
      let sub = x - y;
      alert(sub);
    });

  document
    .getElementById("multiplication")
    .addEventListener("click", function () {
      // perform an multiplication
      let mul = x * y;
      alert(mul);
    });

  document.getElementById("division").addEventListener("click", function () {
    // perform an division
    let div = x / y;
    alert(div);
  });
})();
