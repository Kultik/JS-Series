// 04-dates/02-title-by-hour-two/script.js - 4.2: text according to the hour (2)

(() => {
  // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

  // your code here

  let change = document.getElementById("target");
  let hour = new Date().getHours();
  let minute = new Date().getMinutes();

  if (hour < 15 || (hour === 15 && minute < 55)) {
    change.innerHTML = "Yolo";
  } else {
    change.innerHTML = "Hot Damn";
  }
})();
