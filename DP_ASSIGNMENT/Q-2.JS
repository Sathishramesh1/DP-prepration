// Problem Description:
// Given a string `s`, return the longest palindromic substring in `s`.
// Input Description:
// A string `s`.
// Output Description:
// The longest palindromic substring in `s`.
// Examples:
// **Example 1:**
// - Input: `s = "babad"`
// - Output: `"bab"`
// - Explanation: `"aba"` is also a valid answer.
// **Example 2:**
// - Input: `s = "cbbd"`
// - Output: `"bb"`
// Constraints:
// 1 <= s.length <= 1000
// s consists of only digits and English letters.
// Question 3
// Problem Description:
// For  a  string  sequence,  a  string  word  is  k-repeating  if  word  concatenated  k  times  is  a  substring  of
// sequence. The word's maximum k-repeating value is the highest value k where word is k-repeating
// in sequence. If word is not a substring of sequence, word's maximum k-repeating value is 0.
// Given strings sequence and word, return the maximum k-repeating value of word in sequence.
// Input Description:
// Two strings `sequence` and `word`.
// Output Description:
// The maximum k-repeating value of `word` in `sequence`.
// Examples:
// **Example 1:**
// - Input: `sequence = "ababc"`, `word = "ab"`
// - Output: `2`
// - Explanation: `"abab"` is a substring in `"ababc"`.
// **Example 2:**
// - Input: `sequence = "ababc"`, `word = "ba"`
// - Output: `1`
// - Explanation: `"ba"` is a substring in `"ababc"`. `"baba"` is not a substring in `"ababc"`.
// **Example 3:**
// - Input: `sequence = "ababc"`, `word = "ac"`
// - Output: `0`
// - Explanation: `"ac"` is not a substring in `"ababc"`.
// Constraints:
// 1 <= sequence.length <= 100
// 1 <= word.length <= 100
// sequence and word contain only lowercase English letters.




function lcs(s1, s2) {
    const n = s1.length;
    const m = s2.length;

    
    const dp = Array.from({ length: n }, () => Array(m).fill(-1));

    
    function lcsUtil(ind1, ind2) {
        // Base case If either string has reached the end, the LCS length is 0
        if (ind1 < 0 || ind2 < 0) {
            return 0;
        }

        // If the result for this combination of indices has already been calculated, return it
        if (dp[ind1][ind2] !== -1) {
            return dp[ind1][ind2];
        }

        // If the characters match, increase the LCS length and move both indices
        if (s1[ind1] === s2[ind2]) {
            return (dp[ind1][ind2] = 1 + lcsUtil(ind1 - 1, ind2 - 1));
        } else {
            // If the characters don't match, consider two options: moving one index in either string
            return (dp[ind1][ind2] = Math.max(
                lcsUtil(ind1, ind2 - 1),
                lcsUtil(ind1 - 1, ind2)
            ));
        }
    }

   
    return lcsUtil(n - 1, m - 1);
}


function main() {
    const s1 = "acd";
    const s2 = "ced";

    
    console.log("The Length of Longest Common Subsequence is " + lcs(s1, s2));
}


main();

