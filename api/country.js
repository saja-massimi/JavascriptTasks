'use strict'
const apiURL = "https://restcountries.com/v3.1/all";
let container = document.getElementById("container");
container.style.display = "flex";
container.style.flexWrap = "wrap";

fetch(apiURL).
    then(
        (res) => {
            console.log(res);
            return res.json();



        }).then((data) => {
            console.log(data);


            for (let i = 0; i < data.length; i++) {
                let box = document.createElement("div");
                box.setAttribute("id", "box");
                box.style.border = "solid black 1px";
                box.style.margin = "20px";
                box.style.padding = "20px";
                box.style.width = "350px";
                container.appendChild(box);

                let countryName = document.createElement("h2");
                countryName.innerHTML = data[i].name.common;
                box.appendChild(countryName);

                let flag = document.createElement("img");
                flag.src = data[i].flags.png;
                box.appendChild(flag);

            }
        }).catch(
            (e) => {
                console.log(e);

            }
        )