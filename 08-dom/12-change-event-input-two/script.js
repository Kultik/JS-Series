// 08-dom/12-change-event-input-two/script.js - 8.12: change event (2)


(() => {

    // your code here
    let regex = new RegExp("^(?=(.*[a-zA-Z]){1,})(?=(.*[0-9]){2,}).{8,}$");
    let pass = document.getElementById("pass-one");
    let valid = document.getElementById("validity");
    valid.innerHTML = 'nope';

    pass.addEventListener('input', () => {
        if (regex.test(pass.value)) {
            valid.innerHTML = 'Ok';
        } else {
            valid.innerHTML = 'nope';
        }
    })

})();
