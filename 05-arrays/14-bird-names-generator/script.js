// 05-arrays/14-bird-names-generator/script.js - 5.14: Bird names generator in French

(() => {
  const birds = [
    { name: "mouette", fem: true },
    { name: "corbeau" },
    { name: "mésange", fem: true },
    { name: "hibou" },
    { name: "buse", fem: true },
    { name: "pigeon" },
    { name: "pie", fem: true },
    { name: "vautour" },
    { name: "faucon" },
    { name: "rouge-gorge" },
    { name: "tourterelle", fem: true },
    { name: "corneille", fem: true },
  ];
  const adjectives = new Set([
    "cendré",
    "huppé",
    "chantant",
    "hurlant",
    "perché",
    "grand",
    "petit",
    "bleu",
    "pantelant",
    "tangent",
    "arboré",
  ]);

  // your code here


  let run = document.getElementById("run");
  let target = document.getElementById("target");

  run.addEventListener('click', function(){
    let randBird = Math.floor(Math.random() * birds.length); //math floor or trunc works here
    let randAdj = Math.floor(Math.random() * adjectives.size); // size used because new Set 
    let items = Array.from(adjectives); // conversion of set to array         

    target.innerHTML = (birds[randBird].fem) ? `${birds[randBird].name} ${items[randAdj]}e` : `${birds[randBird].name} ${items[randAdj]}`;

    // target.innerHTML = `${birds[randBird].name} ${items[randAdj]}`;
    // (birds[randBird].fem)? document.target.innerHTML = 'La '+document.target.innerHTML+'e': document.target.innerHTML = 'Le '+document.target.innerHTML;
}); 
})();
