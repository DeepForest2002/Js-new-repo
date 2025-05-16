let score="33";
// console.log(typeof score)
// console.log(typeof(score))

//Typecasting to number 
let valueInNumber=Number(score);
// console.log(typeof(valueInNumber));
// console.log(valueInNumber); 

//Second Case
let score2="33abc" //=> cant be converted in proper number it will be nan 
let score3=null;
score3=Number(score3);
// console.log(score3); => it will give 0 as output 


//Similarly if we convert true to number it will be 1 and 0 will be false
let undefined_val=undefined
undefined_val=Number(undefined_val);
// console.log(undefined_val); => it will give nan means Not a number 

let some_val=""
some_val=Number(some_val)
console.log(`Value of some val is ${some_val}`); //=>Empty string means false and empty string means 0 too in number


let some_val1="Sayan";
some_val1=Number(some_val1);
console.log(some_val1); //true because the string is not empty and in number it will treated as none 


