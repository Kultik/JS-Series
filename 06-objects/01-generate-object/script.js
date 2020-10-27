// 06-objects/01-generate-object/script.js - 6.1: genererate an object


(() => {
    // your code here

    let kulti = {
        lastname: "Smith",
        firstname: "Magma",
        age: "12",
        city: "Tortuga",
        country: "Belastolla"
    }

    let run = document.getElementById("run");

    run.addEventListener("click", function(){
        console.log(kulti);
    })

})();
