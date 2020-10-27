// 04-dates/03-age-by-select/script.js - 4.3: calculate the age

(() => {
  // your code here

  let day = document.getElementById("dob-day");
  let month = document.getElementById("dob-month");
  let year = document.getElementById("dob-year");
  let run = document.getElementById("run");

  run.addEventListener("click", function () {
    let birthdate = new Date(parseInt(year.value));
  });

  let day = document.getElementById("dob-day");
  let month = document.getElementById("dob-month");
  let year = document.getElementById("dob-year");
  let run = document.getElementById("run");

  run.addEventListener("click", function () {
    let birthday = new Date(
      parseInt(year.value),
      parseInt(month.value),
      parseInt(day.value)
    ).getTime();
    console.log(birthday);
    let now = new Date().getTime();
    let ageTime = now - birthday;
    let age = new Date(ageTime).getFullYear() - 1970;
    alert(`Your age is ${age}`);
  });
})();
