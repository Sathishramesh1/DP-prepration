


//solution
var twoSum = function(nums, target) {
    const count=new Map();
    const length=nums.length
    for(let i=0;i<length;i++){
        let b=target-nums[i];
        if(count.has(b)){
            return [i,count.get(b)]
        }
        count.set(nums[i],i)
    }


};

console.log(twoSum([2,7,11,15],9));