// *************************** Part 1 ***************************
let array = ["Coding", "Academy", "By", "Orange"];
let array5 = array.slice();
//1

let array1 = array.slice();
array1.push("Jordan");
console.log(array1);

//2

let array2 = array.slice();
let i = 0;
while (i < 2) {
    array1.pop();
    i++;
}
console.log(array2);

//3
let array3 = array.slice();
array3.unshift("To");
array3.unshift("Welcome");
console.log(array3);

//4
let array4 = array.slice();
array4.shift();
console.log(array4);

//5
console.log(array.join(" "));

//6
console.log(array);

//7
let array6 = [];
array6.push(array5.shift().toString());
array6.push(array5.pop().toString());
console.log(array6);

// *************************** Part 2 ***************************
var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
//a
vegetables.pop();
//b
fruit.shift();
//c
console.log(fruit[1]);
//d
fruit.push(1);
//e
vegetables.length;
//f
vegetables.push(vegetables.length);
//g
let food = fruit.concat(vegetables);
console.log(food);

//h
food.splice(4, 2);
//i
food.reverse();
//j
food.join(" ");