function isEitherEvenOrAreBoth7(num1, num2) {
    // your code here
    return num1 % 2 === 0 || num2 % 2 === 0 || num1 === 7 && num2 === 7 ? true : false;
}

console.log(isEitherEvenOrAreBoth7(3, 2));