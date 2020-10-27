// 04-dates/01-title-by-hour-one/script.js - 4.1: text according to the hour (1)

(() => {
  // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

  // your code here

  let text = document.getElementById("target");
  let time = new Date().getHours(); // 2 lines below in 1
  //   let time = new Date();
  //   let hour = time.getHours();

  console.log(time);

  if (time < 18) {
    text.innerHTML = "Howdy Ho !"; // to display it in the document
  } else {
    text.innerHTML = "Good evening !";
  }

  //   document.addEventListener("DOMContentLoaded", function () {
  //     let theDate = new Date();
  //     document.getElementById("target").innerHTML =
  //       theDate.getHours() < 18 ? "Hello" : "Good evening";
  //   });
})();
