//Given an array and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

function maxSubarraySum(arr, num) {
    if (arr.length < num) return null;

    let total = 0;
    for(let i = 0; i < num; i++){
        total += arr[i];
    }
    let currentTotal = total;
    for(let i = num; i < arr.length; i++){
        currentTotal += arr[i] - arr[i-num];
        total = Math.max(total, currentTotal);
    }
    return total
}