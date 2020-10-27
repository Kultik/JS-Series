// 07-classes/03-inheritance/script.js - 7.3: inheritance


(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }

    class Cat extends Animal {
        constructor(name) {
            super(); // connects parent to child / constructor
            // don't necessarily need to put name inside super();
            this.name = name; // => need for this line otherwise name is undefined
        }
        static greeting = 'Feed me';
    }

    class Dog extends Animal {
        constructor(name) {
            super();
            this.name = name;
        }
        static greeting = 'Sigh';
    }

    const run = document.getElementById("run");
    run.addEventListener('click', () => {
        let Garfield = new Cat('Garfield');
        let Snoopy = new Dog('Snoopy');
        console.log(Garfield.sayHello());
        console.log(Snoopy.sayHello());
    })

})();
