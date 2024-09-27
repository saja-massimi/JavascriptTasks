// *************************** Part 1 ***************************

let sentence = "Welcome to Orange";
//1
console.log(sentence.toUpperCase());
//2
console.log(sentence.toUpperCase().substring(8, 10));
//3
console.log(sentence.replace("to", "from"));
//4
console.log(sentence.toLowerCase());
//5
console.log(sentence.length);
//6
let arr = sentence.split(" ");
console.log(arr[0] + " " + arr[1] + " \"" + arr[2] + "\"");
//7
console.log(sentence.concat(" Jordan"));

// *************************** Part 2 ***************************
let word1 = "cactus";
let word2 = "ca*tus";
//1 
console.log(word1.replaceAll(word1[0], "*"));
//2
console.log(word2.replaceAll(word2[0], "*"));