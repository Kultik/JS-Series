// 08-dom/09-match-password-one/script.js - 8.9: password verification (1)


(() => {

    // your code here
    let pass1 = document.getElementById("pass-one");
    let pass2 = document.getElementById("pass-two");
    let run = document.getElementById("run");

    run.addEventListener("click", function () {
        if (pass1.value !== pass2.value) {
            pass1.style.border = '3px solid red';
            pass2.style.border = '3px solid red';
            run.innerHTML = "Mismatch";
            run.style.color = 'red';
        } else {
            pass1.style.border = '3px solid green';
            pass2.style.border = '3px solid green';
            run.innerHTML = "Matching";
            run.style.color = 'green';
        }
    })
})();
