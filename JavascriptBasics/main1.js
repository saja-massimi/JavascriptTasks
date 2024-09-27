//********************************** Part 1 **********************************

//Cash Flow Ratio
let cash = 1000;
let current_liabilities = 500;

let ratio = cash / current_liabilities;
console.log(ratio);

//Net Income
let revenues = 1000;
let expenses = 500;

let netIncome = revenues - expenses;
console.log(netIncome);

//Total assets 
let liabilities = 1000;
let equity = 500;

let total_assets = liabilities + equity;

console.log(total_assets);

//Net income(using profit margin and sales)

let profit = 1000;
let sales = 500;

console.log(profit * sales);

//Average

let nums = [7, 9, 2];

let sum = 0;
for (let index = 0; index < nums.length; index++) {
    sum += nums[index]
}
console.log(sum / nums.length);

//Discount 

let price = 150;
let discount = 0.30;

console.log(price - (price * discount));

//Age limit (older than 18 and less than 30) 

let age = 20;
if (age > 18 && age < 30)
    console.log(true);
else
    console.log(false);

//Exponential

let num1 = 2;
let num2 = 3;

console.log(Math.pow(num1, num2));

//Remainder

console.log(2 % 3);

//********************************** Part 2 **********************************
console.log(typeof (100), "its a number");
console.log(typeof (73.9), "its a number ");
console.log(typeof (NaN), "not a number is a number");
console.log(typeof ("Water"), "is a string");
console.log(typeof (false), "is a boolean");
console.log(typeof (9 != 11), "returns a boolean");
console.log("Orang" + "e", " + contacts both sides");
console.log("Orange" - "s", "- excpects only numbers if it didnt find a number it returns Nan");
console.log("4" + "8", "concantenate 8 and 8");
console.log("4" - "8", "it finds a number so it subtract it");
console.log("name" + 3, "+ concatenate both");
console.log("name" - 3, "excpects only numbers so it returns Nan");
console.log(82 * "word", "excpects only numbers so it returns Nan");
console.log(1 + "hello" + "concatenate both");
console.log("hello" + 1, "+ concatenate both");
console.log(1 + true, "sees true as a 1");
console.log("hello" + true + "concatenate both");
console.log(typeof (Infinity), "it interpertes infinity as anumber");
console.log(1 == '1', "it compares the content only");
console.log(1 === '1', "it compares the content and type");

