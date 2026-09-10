// Print all even numbers between 1 and 100.

function printEvenNum(){
    for(let i = 1; i <= 100; i++){
        if(i % 2 === 0){
            console.log(i);
        }
    }       
}
console.log("Printing even numbers from 1 to 100:");
printEvenNum(); 
