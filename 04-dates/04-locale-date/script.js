// 04-dates/04-locale-date/script.js - 4.4: textual date

(() => {
  // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

  // your code here
  let x = new Date();
  let change = document.getElementById("target");

  change.innerHTML = x.toLocaleString("en-US", {
    weekday: "long",
    day: "numeric",
    year: "2-digit",
    month: "long",
    hour: "numeric",
    minute: "numeric",
    secondes: "numeric",
    milliseconds: "numeric",
  });
})();
