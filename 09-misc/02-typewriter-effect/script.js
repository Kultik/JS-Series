// 09-misc/02-typewriter-effect/script.js - 9.2: typewriter effect


(() => {

    // your code here
    let i = 0;
    let target = document.getElementById("target");
    let text = target.innerHTML;
    target.innerHTML = ' ';
    let speed = 75; //speed duration of effect in millisec

    typeWriter(); //to call function
    function typeWriter() {
        if (i < text.length) {
            // speed = Math.random() * 100 + 10; to setup random speed
            target.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

})();
