// 08-dom/08-generate-table-two/script.js - 8.8: creating a table (2)

(() => {

    // your code here
    let target = document.getElementById("target");
    let table = document.createElement("table");

    for (i = 0; i < 10; i++) { // as long as i<10, insert me a row here mate
        let tr = document.createElement("tr");
        // 10 rows at this state
        for (j = 0; j < 10; j++) { //as long as j<10, create a cell here mate. Value change column n° changed 
            let td = document.createElement('td');
            td.innerHTML = (j + 1) * (i + 1);
            // td.innerHTML += (i * j) + ' '; same output if i/j = 1 & i/j < 11
            tr.appendChild(td); //td is what we are inserting here in the rows
        }
        table.appendChild(tr);
    }
    target.appendChild(table);

})();
