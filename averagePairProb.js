//write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. there may be more than one pair that fits this.


///create the function called average pair
//initialize a new array.
//have one pointer set to 0 
// have another pointer in the loop that is set to the first index
// compare the values as the loop goes

//mY SOLUTION
// function averagePair(arr, num) {
//     let newArr = [];
//     let i = 0;
//     for(let j = 1; j < arr.length; j++){
//         if(arr[i] + arr[j] / 2 === num) {
//             newArr.push(arr[i], arr[j]);
//             i++;
//             j++;
//         }
//     }
//     return newArr;
// }

// averagePair([1,3,3,5,6,7,10,12,19], 8)

// COLTS Solution
function averagePair(arr, num){
    let start = 0;
    let end = arr.length-1;
    while(start < end){
        let avg = (arr[start]+arr[end]) / 2;
        if(avg === num) return true;
        else if(avg < num) start ++
        else end --
    }
    return false;
}