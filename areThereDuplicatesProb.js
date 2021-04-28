//implement a function called areThereDuplicates which accepts a variable number of arguments and use checks whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern of the multiple pointers pattern.


// //COLT'S frequency counter solution
// function areThereDuplicates(){
//     let collection = {};

//     for(let val in arguments){
//         collection[arguments[val]] = (collection[arguments[val]] || 0)
//     }
//     for(let key in collection){
//         if(collection[key] > 1) return true
//     }
//     return false;
// }


// COlT'S multiple pointers solution
function areThereDuplicates(...args){
    args.sort((a,b) => a > b);
    let start = 0;
    let next = 1;
    while(next < args.length){
        if(args[start] === args[next]) {
            return true
        }
        start ++;
        next++
    }
    return false;
}