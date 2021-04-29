// write function called isSubsequence which takes in two strings and checks whether the characters in the string form a subsequence of the characters in the second string. in other words, the function should check whether the character in the first string appear somewhere in the second string, without their order changing.

function isSubsequence(str1, str2) {
    let i = 0;
    var j = 0;
    if(!str1) return true;
    while( j < str2.length) {
        if (str2[j] === str1[i]) i ++;
        if(i === str1.length) return true;
        j++
    }
    return false
}