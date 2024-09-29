"use strict";
const para = document.getElementById("paragraph");


const words = para.innerText.split(" ");
para.innerHTML = words.map(word => {
    if (word.length >= 8)
        return `<span style="background-color:yellow">${word}</span>`;
    return word;
}).join(' ');


const link = document.createElement("p");
link.innerHTML = '<a href="https://google.com">Google</a>';
document.body.append(link);

let sentences = para.innerHTML.split(".");
for (let i = 0; i < sentences.length; i++) {
    sentences[i] = sentences[i].trim() + ".<br>";
}
para.innerHTML = sentences.join(" ");

const words2 = para.innerText.trim().split(/\s+/);
document.getElementById("wordCount").innerHTML = words2.length;
