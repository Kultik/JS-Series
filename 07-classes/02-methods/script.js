//07-classes/02-methods/script.js - 7.2: methods


(() => {
    // your code here

    class Person {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }
        sayHello() {
            return 'Hello ' + this.firstname + ' ' + this.lastname + '!';
            // return `Hello ${this.firstname} ${this.lastname}!`;
        } // same output
    }

    const run = document.getElementById("run");
    run.addEventListener("click", () => {
        let Magma = new Person("Magma", "Del Phosio");
        console.log(Magma.sayHello());
    })
})();
