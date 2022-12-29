/*Write a program to check whether a String is palindrome or not .

Note :A Palindrome String is a string that is the same after the reverse .

Example : LOL , MADAM. */


function checkPalindrome(string) {
    const len = string.length;
    for (let i = 0; i < len / 2; i++) {
        if (string[i] !== string[len - 1 - i]) {
            console.log("It is not a palindrome");
        }
    }
    console.log("It is a palindrome");
    
}

checkPalindrome("MADM");