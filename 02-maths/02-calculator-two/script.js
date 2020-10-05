// 02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)

(() => {
  // to get the value of an input: document.getElementById("element-id").value

  let x = new Number(document.getElementById("op-one").value);
  let y = new Number(document.getElementById("op-two").value);
  const performOperation = (operation) => {
    // perform the operation
    switch (operation) {
      case "addition":
        let add = x + y;
        alert(add);
        break;
      case "substraction":
        let sub = x - y;
        alert(sub);
        break;
      case "multiplication":
        let mul = x * y;
        alert(mul);
        break;
      case "division":
        let div = x / y;
        alert(div);
        break;
    }
  };

  Array.from(document.querySelectorAll("button.operator")).forEach(($btn) =>
    $btn.addEventListener("click", () => (performOperation($btn.id), false))
  );
})();
