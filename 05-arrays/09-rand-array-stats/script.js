// 05-arrays/09-rand-array-stats/script.js - 5.9: random & statistics array

(() => {
  // your code here

  let run = document.getElementById("run");
  let min = document.getElementById("min");
  let max = document.getElementById("max");
  let sum = document.getElementById("sum");
  let avg = document.getElementById("average");

  function randInt(min, max) {
    // max included
    return Math.floor(Math.random() * 100) + 1;
  }

  // ARRAY MIN

  function minInArray(array) {
    return Math.min.apply(null, array);
  }

  // ARRAY MAX

  function maxInArray(array) {
    return Math.max.apply(null, array);
  }

  // ARRAY SUM

  function sumOfArray(array) {
    let total = 0;
    for (let i in array) {
      // sum of i in newly created array
      total += array[i];
    }
    return total;
  }

  function avgOfArray(array) {
    return sumOfArray(array) / array.length;
  }

  function displayNumbers() {
    let tenRandNum = [];
    for (let i = 0; i < 10; i++) {
      tenRandNum.push(randInt(1, 10));
    }
    for (let i = 0; i < tenRandNum.length; i++) {
      document.getElementById(`n-${i + 1}`).innerText = tenRandNum[i]; // syntax to call the multiple n-
    }

    min.innerHTML = minInArray(tenRandNum);
    max.innerHTML = maxInArray(tenRandNum);
    sum.innerHTML = sumOfArray(tenRandNum);
    avg.innerHTML = avgOfArray(tenRandNum);
  }

  // your code here

  run.addEventListener("click", () => {
    displayNumbers();
  });

  //   document.getElementById("run").addEventListener("click", function () {
  //     let min = 101;
  //     let max = 0;
  //     let sum = 0;
  //     let arrayOfn = document.querySelectorAll('[id^="n-"]');
  //     for (elem of arrayOfn) {
  //       elem.innerHTML = Math.trunc(Math.random() * 100 + 1);
  //       sum += Number.parseInt(elem.innerHTML);
  //       Number.parseInt(elem.innerHTML) < min
  //         ? (min = Number.parseInt(elem.innerHTML))
  //         : "";
  //       Number.parseInt(elem.innerHTML) > max
  //         ? (max = Number.parseInt(elem.innerHTML))
  //         : "";
  //     }
  //     document.getElementById("min").innerHTML = min;
  //     document.getElementById("max").innerHTML = max;
  //     document.getElementById("sum").innerHTML = sum;
  //     document.getElementById("average").innerHTML = sum / arrayOfn.length;
  //   });
})();
