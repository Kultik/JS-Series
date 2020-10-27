// 08-dom/10-match-password-two/script.js - 8.10: password verification (2)


(() => {

    // your code here
    let pass1 = document.getElementById("pass-one");
    let pass2 = document.getElementById("pass-two");
    let run = document.getElementById("run");

    run.addEventListener("click", () => {
        if (pass1.value !== pass2.value) {
            pass1.setAttribute("class", "error");
            pass2.setAttribute("class", "error");
        }
    })

})();
