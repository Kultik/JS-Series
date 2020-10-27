// 08-dom/03-select-three/script.js - 8.3: select multiple elements by css selector


(() => {

    // your code here
    let target = document.querySelectorAll(".target");
    // getElementByClassName doesn't work here
    target.forEach(target => {
        target.innerHTML = "Lul";

    });

})();
