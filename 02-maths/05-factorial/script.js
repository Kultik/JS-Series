// 02-maths/05-factorial/script.js - 2.5: Factorial

(() => {
  // to get the value of an input: document.getElementById("element-id").value
  //   let x = Number(document.getElementById("number"));
  document.getElementById("run").addEventListener("click", () => {
    // your code here

    function fact(x) {
      if (x == 0) {
        return 1;
      }
      if (x < 0) {
        return -1;
      }
      for (var i = x; --i; ) {
        x *= i;
      }
      return x;
    }
    alert(fact(Number.parseInt(document.getElementById("number").value)));
  });
})();
