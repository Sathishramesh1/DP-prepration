

// Question 3: Longest Substring Without Repeating Characters
// Given a string s, find the length of the longest substring without repeating characters.
// Example:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

const longestSubstring=(s)=>{

    let n = s.length;
    let l=0;
    let r=0;
    let maxlength=0;
    const hash=new Set();

    while(r<n){
    if(!hash.has(s[r])){
        hash.add(s[r])
        r=r+1
        let length=r-l;
    maxlength=Math.max(maxlength,length);
    

    }else{
         hash.delete(s[l]);
            l++;
    }
    
    }


return maxlength



}
console.log(longestSubstring("abcabcbb"));