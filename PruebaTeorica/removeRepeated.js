//Time: O(n log n)
//Space: O(1)
function RemoveRepeated(nums) {
    //Base Case
    if (nums.length < 2)
        return nums;
    //Recursive Case
    //Sort Array
    nums.sort(function (a, b) { return a - b; });
    var k = 1;
    for (var i = 1; i < nums.length; i++) {
        if (nums[i] != nums[i - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }
    while (k < nums.length) {
        nums.pop();
    }
    return nums;
}
console.log('Input', [1, 2, 5, 10, 8, 8, 1, 3, 4, 5]);
console.log('Output', RemoveRepeated([1, 2, 5, 10, 8, 8, 1, 3, 4, 5]));
//[1, 2, 5, 10, 8, 8, 1, 3, 4, 5] => [1, 2, 3, 4, 5, 8, 10] 
