// Reverse a string.

function reverseString(str) {
    
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    console.log(str + " reversed is : " + reversed);
    return reversed;    
}

(reverseString("hello")); // Output: "olleh"