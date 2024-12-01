function isPalindrome(word) {

    word = word.toLowerCase();

    const length = word.length;

    for (let i = 0; i < length / 2; i++) {
        
        if (word[i] !== word[length - 1 - i]) {
            return false; 
        }
    }
    return true; 
}


const word = "MOM";  
console.log(Is "{word}" a palindrome?, isPalindrome(word));
