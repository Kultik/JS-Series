// 07-classes/01-instances/script.js - 7.1: instances


(() => {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        getFullName() {
            return this.name + ' ' + this.age
        }
    }

    const run = document.getElementById("run");
    run.addEventListener("click", function () {
        let Skitty = new Cat('Skitty', 9);
        let Pixel = new Cat('Pixel', 6);
        console.log(Skitty.getFullName());
        console.log(Skitty, Pixel);
    })

})();
