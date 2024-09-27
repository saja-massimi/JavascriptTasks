//1
function string2array() {
    let s = "Orange Jordan";
    let ans = [];
    let word = "";

    for (let index = 0; index < s.length; index++) {

        if (s[index] == " ") {

            ans.push(word);
            word = "";
        }

        word += s[index];

    }
    ans.push(word);
    return ans;
}
console.log(string2array());

//2
function convertPhone() {
    let s = "0776807777";
    let ans = "";
    for (let index = 0; index < s.length; index++) {
        if (index < 7)
            ans += "*";
        else
            ans += s[index];

    }
    return ans;
}
console.log(convertPhone());
//3
function convertEmail() {
    let s = "orange_academy@orange.jo";
    let ans = "";
    let i = s.length - 1;
    let j = 0;

    while (j < i) {

        if (s[j] == "@")
            i = j;

        ans += "*";
        j++;
    }


    return ans;
}

console.log(convertEmail());

// 4 & 5
function upperCase() {
    let a = "coding academy by orange";
    let s = "";
    s += a[0].toUpperCase();

    for (let i = 1; i < a.length; i++) {

        if (a[i - 1] == " ")
            s += a[i].toUpperCase();
        else
            s += a[i];
    }

    return s;
}

console.log(upperCase());

//6

function flipNumbers() {
    let num = 92485;
    let flippedNumber = 0;
    while (num > 0) {
        flippedNumber = flippedNumber * 10 + (num % 10);
        num = Math.floor(num / 10);
    }
    return flippedNumber;
}

console.log(flipNumbers());

//7

function swapNumbers() {
    let a = 3;
    let b = 4;

    let c = 0;
    c = a;
    a = b;
    b = c;
    console.log("A is equal to " + a + " and b is equal to " + b);

}
swapNumbers();

//8


function removeIndexed() {
    let s = "Orange";
    let index = 3;

    let ans = "";
    for (let i = 0; i < s.length; i++) {
        if (i == index)
            continue;
        else
            ans += s[i];

    }
    return ans;
}

console.log(removeIndexed());
//9

function concatStrings() {
    let s1 = "lora";
    let s2 = "inge";

    return s1.slice(1).concat(s2.slice(1));
}
console.log(concatStrings());

//10

function matches() {
    let char = 'z';
    let str = "orange";

    if (char == str[0] || char == str[str.length])
        return true;
    else
        return false;
}
console.log(matches());

//11
function string2array() {
    let str = "Coding Academy by Orange";
    return str.split(" ");
}
console.log(string2array());

//12
function sortString() {
    let str = "orange";
    return str.split('').sort().join('');
}
console.log(sortString());