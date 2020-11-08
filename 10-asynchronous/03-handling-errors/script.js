// 10-asynchronous/03-handling-errors/script.js - 10.3: gestion d'erreur


(() => {
    // your code here
    let run = document.getElementById("run");

    run.addEventListener("click", () => {
        window.lib.getPersons((err, persons) => {
            if (err) {
                console.error(err);
            } else {
                console.log(persons);
            }
        });
    });
})();
