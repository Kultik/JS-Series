// 09-misc/01-waving-text/script.js - 9.1: waving text


(() => {
    let target = document.getElementById('target');
    let wave = target.innerHTML;
    target.innerHTML = '';

    let arrayText = wave.match(/.{0,5}/g);

    for (elem of arrayText) {
        target.appendChild(randSizeFont(elem));
    }
    function randSizeFont(word) {
        let span = document.createElement('span');
        span.innerHTML = word;
        span.style.fontSize = Math.floor((Math.random() * 25) + 10) + "px";
        return span;
    }
})();
