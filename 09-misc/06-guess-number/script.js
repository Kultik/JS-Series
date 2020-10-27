// 09-misc/06-guess-number/script.js - 9.6: guess the number

(() => {
    // function randomNumber() {
    //     return Math.trunc(Math.random() * 100 + 1);
    // }

    // const x = randomNumber(1, 100);
    // let guess = prompt("Guess the correct number, noob :");
    // let count = 1;

    // while (true) {
    //     if (parseInt(guess) === x) {
    //         alert(`Congrats for guessing ${x}, it only took you ${count} tries, woohoooo.`)
    //         break
    //     } else {
    //         count++; // loops through and add another number
    //         if (guess > x) {
    //             guess = prompt('Try lower!')
    //         } else {
    //             guess = prompt('Try higher!')
    //         }
    //     }
    // }
})();

// another method 
window.addEventListener("load", () => {
    let randNum = Math.trunc(Math.random() * 100 + 1);
    let count = 1;

    while ((guess = new Number(Number.parseInt(prompt('Find number between 1 & 100: ')))) != randNum) {
        count++;
        if (guess < randNum) {
            alert('Higher!');
        } else {
            alert('Lower!');
        }
    }
    alert(`That's it! You found it in ${count} tries`);
});