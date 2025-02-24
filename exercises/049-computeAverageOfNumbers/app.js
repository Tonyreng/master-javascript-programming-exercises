// Write your function here
const computeAverageOfNumbers = arr => {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i] / arr.length;
    }

    return result;
};

let input = [1, 2, 3, 4, 5];

console.log(computeAverageOfNumbers(input));