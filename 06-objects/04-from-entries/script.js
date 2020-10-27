// 06-objects/04-from-entries/script.js - 6.4: fromEntries



const keys = ["name", "species", "age", "gender", "color"];
const values = ["Skitty", "cat", 9, "female", "tabby"];
// your code here
const run = document.getElementById("run");

run.addEventListener("click", function () {
    let createObj = [];
    keys.forEach((item, index) => {
        createObj.push([item, values[index]]);
    });
    const object = Object.fromEntries(createObj);
    console.log(object);
});



// SAME THROUGH A LOOP

// const run = document.getElementById('run');
// run.addEventListener('click', () => {

//     let finalArr = [];
//     for (let i = 0; i < keys.length; i++) {
//         finalArr.push([keys[i], values[i]])
//     }

//     const object = Object.fromEntries(finalArr);
//     console.log(object);


// })