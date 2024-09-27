'use strict'
//1
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
console.log(arr1.concat(arr2));

//2
let arr = [1, 2, 3, 4, 5, 6];
let a = 2;
let b = 4;
let arr6 = arr.slice(a, b);
let ans = [];

for (let i = 0; i < arr.length; i++) {
    let found = false;

    for (let j = 0; j < arr6.length; j++) {
        if (arr[i] === arr6[j]) {
            found = true;
            break;
        }
    }

    if (!found) {
        ans.push(arr[i]);
    }
}

console.log(ans);



//3
let arr3 = [1, 2, 3, 4, 5];
let c = 3;

console.log(arr3.splice(c));


//4
let arr4 = [1, 2, 3, 4, 5];
for (let index = 0; index < arr4.length; index++) {
    console.log(arr4[index]);


}

//5
let arr5 = [1, 2, 3, 4, 5];
arr5.forEach(element => {
    console.log(element);

});
