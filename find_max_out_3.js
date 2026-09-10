// Find the largest of three numbers.
 
function largestNum(num1, num2, num3){
    if ( num1 >= num2 && num1 >= num3){
        return num1;
    }
    else if ( num2 >= num1 && num2 >= num3){
        return num2;
    }
    else{
        return num3;
    }
}
console.log("Largest Number is " + largestNum(10, 200, 30));

// Output: 200