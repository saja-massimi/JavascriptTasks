const para = document.getElementById("paragraph");
const words = para.innerHTML.split(" ");



para.innerHTML = words.map(word => {
    if (word.length >= 8)
        return `<span style="background-color:yellow">${word} </span>`;
    else
        return word;
}).join(' ');

const sentence = para.innerText.split(".");
for (let i = 0; i < sentence.length; i++) {

    sentence[i] += ".<br>";
}

para.innerHTML = sentence.join(' ');


const words2 = para.innerText.split(" ");
document.getElementById("wordCount").innerHTML = words2.length;