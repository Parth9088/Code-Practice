function checkNum(num) {
    if (num == 0){
        return "Zero";
    } else if (num > 0){
        return "Positive"; 
    } else {
        return "Negative";
    }
}

console.log("Number is " + 5 + " → " + checkNum(5));
console.log("Number is " + -3 + " → " + checkNum(-3));
console.log("Number is " + 0 + " → " + checkNum(0));