//1
function evenNumbers() {
    for (let index = 1; index < 50; index++) {
        if (index % 2 == 0)
            console.log(index);

    }


    let i = 1;
    while (i <= 50) {
        if (i % 2 == 0)
            console.log(i);
        i++;
    }

}
//2
function evenNumbers2() {
    for (let index = 1; index < 50; index++) {
        if (index % 2 == 0)
            console.log(index);

    }

}
//3
function evenOdd() {
    for (let index = 1; index < 50; index++) {
        if (index % 2 === 0)
            console.log(index);

    }


    let i = 1;
    while (i <= 50) {
        if (i % 2 !== 0)
            console.log(i);
        i++;
    }

}
//4
function fizz() {
    for (let index = 1; index < 100; index++) {
        if (index % 3 == 0)
            console.log("Fizz");
        else if (index % 5 == 0)
            console.log("Buzz");
        else if (index % 3 == 0 && index % 5 == 0)
            console.log("FizzBuzz");
        else console.log(index);
    }
}

//5
function fizz(num) {

    if (num % 3 == 0)
        console.log("Fizz");
    else if (num % 5 == 0)
        console.log("Buzz");
    else if (num % 3 == 0 && num % 5 == 0)
        console.log("FizzBuzz");
    else console.log(num);

}

// 6    
let i = 100;
function fizz3(num) {
    if (num <= 0)
        return 0;


    if (num % 3 == 0 && num % 5 == 0) {

        console.log("FizzBuzz");

    } else
        if (num % 3 == 0) {

            console.log("Fizz");

        }
        else if (num % 5 == 0) {

            console.log("Buzz");


        }
        else {

            console.log(num);

        }
    fizz3(i--);

}
fizz3();

//7
function banknotes() {
    let x = 57;
    let arr = [25, 10, 5, 1];
    let ans = [];

    for (let index = 0; index < arr.length; index++) {
        let quantity = Math.floor(x / arr[index]);
        ans = ans.concat(Array(quantity).fill(arr[index]));
        x -= quantity * arr[index];
    }

    return ans;
}
console.log(banknotes());

//8

function letterOcurr() {
    let str = "Coding Academy by Orange";
    let char = "o";
    let count = 0;
    for (let index = 0; index < str.length; index++) {
        if (str[index].toLowerCase() == char)
            count++;

    }

    return count;
}
console.log(letterOcurr());

//9
function oddEven() {
    //a
    for (let index = 0; index <= 20; index++) {
        console.log(index);

    }
    //b
    for (let index = 3; index <= 29; index++) {
        if (index % 2 != 0)
            console.log(index + "\n");

    }

    //c
    for (let index = 12; index >= -14; index--) {
        if (index % 2 === 0)
            console.log(index + "\n");

    }
    //d
    for (let index = 50; index >= 20; index--) {
        if (index % 3 === 0)
            console.log(index + "\n");

    }
}

//10 
let var1 = 'CodingAcademy';
let var2 = [7, 500, 'KH404', 'black', 36];
for (let index = 0; index < var2.length; index++) {
    console.log(var2[index] + "\n");

}

for (let index = var1.length - 1; index >= 0; index--) {
    console.log(var1[index] + "\n");

}

//11

let arr = [7, 23, 18, 9, -13, 38, -10, 12, 0, 124];
let evenArr = [];
let oddArr = [];
for (let index = 0; index < arr.length; index++) {
    if (arr[index] % 2 == 0)
        evenArr.push(arr[index]);
    else
        oddArr.push(arr[index]);
}
//12
let Protein = ['chicken', 'noodles', 'tofu', 'beef', 'fish', 'beans'];
let grain = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
let vegetable = ['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus'];
let Beverage = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
let dessert = ['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi'];

function meal(num) {
    for (let index = 0; index < num; index++) {
        let meals = [];
        meals.push(Protein[Math.floor(Math.random() * Protein.length)]);
        meals.push(grain[Math.floor(Math.random() * grain.length)]);
        meals.push(vegetable[Math.floor(Math.random() * vegetable.length)]);
        meals.push(Beverage[Math.floor(Math.random() * Beverage.length)]);
        meals.push(dessert[Math.floor(Math.random() * dessert.length)]);

        console.log(meals);
    }
}

meal(12);
