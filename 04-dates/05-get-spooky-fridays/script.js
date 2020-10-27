// 04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13

(() => {
  //   let run = document.getElementById("run");
  //   let year = document.getElementById("year");
  //   function jason(year) {
  //     let count = 0;
  //     for (let month = 0; month < 12; month++) {
  //       let d = new Date(year, month, 13);
  //       if (d.getDay() == 5) {
  //         count++;
  //       }
  //     }
  //     return count;
  //   }
  //   run.addEventListener("click", function () {
  //     alert(jason(Number.parseInt(year.value))); // thats what i missed earlier
  //   });

  // EXO-B

  function freddy(yahr) {
    let freddyMonth = [];
    let monthNight = [
      "january",
      "february",
      "march",
      "april",
      "may",
      "june",
      "july",
      "august",
      "september",
      "october",
      "november",
      "december",
    ];
    for (let month = 0; month < 12; month++) {
      let d = new Date(yahr, month, 13);
      if (d.getDay() == 5) {
        freddyMonth.push(monthNight[d.getMonth()]);
      }
    }
    return freddyMonth;
  }

  run.addEventListener("click", function () {
    let yearNum = parseInt(year.value);
    alert(`In ${yearNum}, Friday 13th happens in : ${freddy(yearNum)}`);
  });
})();
