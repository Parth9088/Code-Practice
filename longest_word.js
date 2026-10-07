// Find the longest word in a sentence.

function longestWord(sentence) {
    let longest = "";
    let word = "";

    for (let i = 0; i <= sentence.length; i++) {

        if (sentence[i] !== " " && sentence[i] !== undefined) {
            word = word + sentence[i];
        } 
        else {
            if (word.length > longest.length) {
                longest = word;
            }

            word = "";
        }
    }

    return "The longest word in a sentence is : " + longest;
}

console.log(longestWord("I am learning JavaScript programming"));