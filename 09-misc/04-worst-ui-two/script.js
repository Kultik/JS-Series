// 09-misc/04-worst-ui-two/script.js - 9.4: worst user interface (2) : phone clicker


(() => {

    // your code here
    let target = document.getElementById("target");
    target.innerHTML = '0460000000';

    let butt1 = document.getElementById("part-one");
    let butt2 = document.getElementById("part-two");
    let butt3 = document.getElementById("part-three");
    let butt4 = document.getElementById("part-four");

    let butt1Value = Number.parseInt(butt1.innerHTML);
    let butt2Value = Number.parseInt(butt2.innerHTML);
    let butt3Value = Number.parseInt(butt3.innerHTML);
    let butt4Value = Number.parseInt(butt4.innerHTML);

    butt1.addEventListener("click", () => {
        if (butt1Value < Number.parseInt(butt1.getAttribute("data-max"))) {
            butt1Value += 1;
            // butt1.innerHTML = butt1Value;
            // target.innerHTML = `${butt1.innerHTML}${butt2.innerHTML}${butt3.innerHTML}${butt4.innerHTML}`;
        } else {
            butt1Value = Number.parseInt(butt1.getAttribute("data-min"));
        }
    })

    butt2.addEventListener("click", () => {
        if (butt2Value < Number.parseInt(butt2.getAttribute("data-max"))) {
            butt2Value += 1;
            // butt2.innerHTML = butt2Value;
        } else {
            butt2Value = Number.parseInt(butt2.getAttribute("data-min"));
        }
    })

    butt3.addEventListener("click", () => {
        if (butt3Value < Number.parseInt(butt3.getAttribute("data-max"))) {
            butt3Value += 1;
            // butt3.innerHTML = butt3Value;
        } else {
            butt3Value = Number.parseInt(butt3.getAttribute("data-min"));
        }
    })

    butt4.addEventListener("click", () => {
        if (butt4Value < Number.parseInt(butt4.getAttribute("data-max"))) {
            butt4Value += 1;
            // butt4.innerHTML = butt4Value;
        } else {
            butt4Value = Number.parseInt(butt3.getAttribute("data-min"));
        }
    })

    // target.innerHTML = `0${butt1.innerHTML}${butt2Value}${butt3Value}${butt4Value}`;

    document.querySelectorAll("[id^=part-]").forEach(elem =>
        elem.addEventListener(
            "click",
            () => {
                target.innerHTML = '0' + butt1Value;
                (butt2Value < 10) ? target.innerHTML += '0' + butt2Value : target.innerHTML += butt2Value;
                (butt3Value < 10) ? target.innerHTML += '0' + butt3Value : target.innerHTML += butt3Value;
                (butt4Value < 10) ? target.innerHTML += '0' + butt4Value : target.innerHTML += butt4Value;
            },
        ),
    );
})();










