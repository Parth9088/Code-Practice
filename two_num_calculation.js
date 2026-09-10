let a = 10;
let b = 50;

function addNum(){
    let sum = a + b;
    return sum;
}

function subNum(){
    let difference = a - b;
    return difference;
}

function mulNum(){
    let product = a * b;
    return product;
}

function divNum(){
    let quotient = a / b;
    return quotient;
}

console.log("Addition :", addNum());
console.log("Subtraction :", subNum());
console.log("Multiplication :", mulNum());
console.log("Division :", divNum());