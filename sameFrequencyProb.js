//write a function called same frequency. given 2 positive integers, find out if the two numbers have the same frequency of digits


//MY SOLUTION
// function sameFrequency(num1, num2){
//     //Edge case
//     if(num1.length !== num2.length){
//         return false
//     }
//     //initialize a object to hold the frequency of each digit
//     let counter = {};
//     //loop through the first number then check if they exist in the object if they do add 1 to it if not add it to the object
//     for(let i = 0; i < num1.length; i++){
//         let digit = num1[i];
//         if(counter[digit]){
//             counter[digit] += 1;
//         } else{
//             counter[digit] = 1;
//         }
//     }
    
//     //loop through num2 and compare with object if it exist subtract 1 from its value and if it does not return false
//     for(let i = 0; i < num2.length; i++ ){
//         let digit = num2[i]
//         if(!counter[digit]){
//             return false
//         } else{
//             counter[digit] -= 1;
//         }
//     }
//     return true
// }

// sameFrequency(182, 281);

//COLT'S SOLUTION

function sameFrequency(num1, num2){
    let strNum1 = num1.toString();
    let strNum2 = num2.toString();

    if(strNum1.length !== strNum2.length) return false;

    let countNum1 = {};
    let countNum2 = {};

    for(let i = 0; i < strNum1.length; i++){
        countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
    }

    for(let j = 0; j < strNum2.length; i++){
        countNum2[strNum2[i]] = (countNum2[strNum2[i]] || 0) + 1
    }

    for(let key in countNum1){
        if(countNum1[key] !== countNum2[key]) return false;
    }

    return true;
 }