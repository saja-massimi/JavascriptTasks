//1
function findSmallest(arr) {

    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min)
            min = arr[i];
    }
    console.log(min);

}

findSmallest([30, 45, 60, 7]);
//2
function Alphabeticalorder(word) {
    console.log(word.split("").sort().join(""));

}
Alphabeticalorder('hello')
//3

function countWords(sentence) {
    console.log(sentence.split(" ").length);

}
countWords("hello from CodingAcademy!");
//4

function MultiplyByLength(arr) {

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i] * arr.length);


    }
}
MultiplyByLength([4, 2, 5]);

//5
function doubleChar(string) {
    let ans = "";
    for (let i = 0; i < string.length; i++) {
        ans += string[i] + string[i];
    }
    console.log(ans);
}

doubleChar('Coding');
