//1
function age() {
    let x = 1998;
    let d = new Date();
    let age = d.getFullYear() - x;
    if (age > 60) {
        return "You may join the seniors’ program";
    } else if (age > 30) {
        return "You are not eligible. You may join other programs";
    } else if (age >= 18 && age <= 30) {
        return "You are eligible. Start your application.";
    } else {
        return "You may join the kids' program";
    }
}
console.log(age());
//2
function switchCases() {
    let s = "OrAnGe";
    let result = "";

    for (let index = 0; index < s.length; index++) {
        if (s[index] == s[index].toUpperCase()) {
            result += s[index].toLowerCase();
        } else {
            result += s[index].toUpperCase();
        }
    }
    return result;
}

console.log(switchCases());
//3
function removeSpace() {

    let a = "coding academy by orange";
    let s = "";
    s += a[0].toUpperCase();

    for (let i = 1; i < a.length; i++) {

        if (a[i - 1] == " ")
            s += a[i].toUpperCase();
        else if (a[i] == " ")
            continue;
        else
            s += a[i];
    }

    return s;
}

console.log(removeSpace());
//4
function removeElement() {
    let arr = ["Coding", "Academy", "By", "Orange"];
    let element = "By";
    let result = [];
    for (let index = 0; index < arr.length; index++) {
        if (element == arr[index])
            continue;
        else
            result.push(arr[index]);

    }
    return result;
}
console.log(removeElement());
//5
function OddOrEven() {
    let x = 1;
    if (x % 2 == 0)
        return "even";
    else
        return "odd";
}
console.log(OddOrEven());
//6
function isNumber() {
    let x = 4;
    return typeof (x) == "number";
}
console.log(isNumber());

//7
function largest() {
    let num1 = 1;
    let num2 = 2;

    if (num1 > num2) return num1;
    else return num2;
}
console.log(largest());
//8
function triangle() {
    let side1 = 90;
    let side2 = 80;
    let side3 = 90;

    if (side1 == side2 && side2 == side3) {
        return "Equilateral";
    } else if (side1 == side2 || side2 == side3 || side1 == side3) {
        return "Isosceles";
    } else {
        return "Scalene";
    }
}

console.log(triangle());
//9
function range() {
    let num = 7;
    let range = 10;

    for (let index = 0; index < range; index++) {

        if (index == num)
            return true;
    }
}
console.log(range());
//10
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isLeapYear());

