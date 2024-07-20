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




function maxRepeating(sequence,word)  {
    let n = sequence.length;
    let m = word.length;
    for (let k = Math.floor(n / m); k > 0; k--) {
        if (sequence.includes(word.repeat(k))) {
            return k;
        }
    }
    return 0;
}

console.log(maxRepeating("ababc","ba"));