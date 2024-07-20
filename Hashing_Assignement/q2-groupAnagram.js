// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.
// Example:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

const groupAnagrams = function (strs) {
  const map = new Map();

  for (let str of strs) {
    const sortedStr = str.split("").sort().join("");

    if (map.has(sortedStr)) {
      map.get(sortedStr).push(str);
    } else {
      map.set(sortedStr, [str]);
    }
  }

  return Array.from(map.values());
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
