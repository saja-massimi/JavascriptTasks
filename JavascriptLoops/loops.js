//1
function fact(num) {
    if (num === 0)
        return 1;

    return fact(num - 1) * num;

}

console.log(fact(4), "factorial of a number");

//2

function fibonacci(num) {
    let series = [0, 1];
    for (let index = 2; index < num; index++) {
        series.push(series[index - 1] + series[index - 2]);
    }

    return series;
}
console.log(fibonacci(10));
//3

function printPrimes(num) {
    for (let i = 2; i <= num; i++) {
        let isPrime = true;

        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            console.log(i);
        }
    }
}

printPrimes(20);

//4
function print2darr(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {

            console.log(arr[i][j]);

        }

    }
}

print2darr([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);

//5
function reverseArr(arr) {
    for (let index = arr.length; index >= 0; index--) {
        console.log(arr[index]);


    }
}
reverseArr([1, 2, 3, 4, 5]);
