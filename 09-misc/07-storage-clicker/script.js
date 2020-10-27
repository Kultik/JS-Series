// 09-misc/07-storage-clicker/script.js - 9.7: storage clicker


(() => {

    // your code here
    let target = document.getElementById("target");
    let increment = document.getElementById("increment");
    let count = localStorage.getItem("counter") || 0;
    target.innerHTML = count;

    increment.addEventListener("click", () => {
        count++;
        localStorage.setItem("counter", count);
        target.innerHTML = count;
    })
})();
