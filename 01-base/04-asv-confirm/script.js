// 01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation

(() => {
  // Don't bother with that, look at your browser's console(chrome), you can delete it afterwards ;)
  console.log(
    "%c ",
    "padding: 38px; background:url(https://becode.org/app/uploads/2020/03/bc_mailsign_seal.png) no-repeat;"
  );
  console.log("Hello Woods programmer");

  // YOUR CODE HERE
  while (true) {
    let age = prompt("whats your age?");
    let gender = prompt("gender?");
    let town = prompt("town?");

    alert(age + " " + gender + " " + town);
    let end = confirm("is this correct?");
    if (end) {
      alert("thanks");
      break;
    } else {
      alert("lets try again");
    }
  }
})();
