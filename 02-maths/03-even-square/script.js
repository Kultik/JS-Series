// 02-maths/03-even-square/script.js - 2.3: squares and pairs

(() => {
  document.getElementById("run").addEventListener("click", () => {
    // your code here
    for (let i = 1; i < 22; i++) {
      alert(`Square of ${i}: ${Math.pow(i, 2)}`);
    }
  });
})();
