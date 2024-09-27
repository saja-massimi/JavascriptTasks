//1
let person = {
    per_name: "Adam",
    age: 25
}
person["gender"] = "male";
console.log(person);

//2

const values = Object.values(person);
console.log(values);
//3
const entry = Object.entries(person);
console.log(entry);

//4

let obj1 = {
    per_name: "Adam",
    age: 25
}

let obj2 = {
    gender: "male"
}

let mergedObj = Object.assign({}, obj1, obj2);
console.log(mergedObj);

//5
Object.seal(person);
console.log(person);
