// Count vowels in a string.

function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    console.log(str, ": Contains", count, "Vowels.");
}

countVowels("Hello World");
