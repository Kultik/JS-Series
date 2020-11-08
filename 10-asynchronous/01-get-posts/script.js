// 10-asynchronous/01-get-posts/script.js - 10.1: chargement d'articles


(() => {
    // your code here
    let run = document.getElementById("run");

    run.addEventListener('click', () => {
        window.lib.getPosts((error, articles) => {
            // if (error) {
            //     console.log(error);
            // }
            return (error ? console.log(error) : console.log(articles));
            // console.log(articles);
            // for (elem of articles) {
            //     console.log(elem);
            // };
        });
    })
})();
