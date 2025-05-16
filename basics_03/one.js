
//Var is global and let,const is local 

// Truthy and falsy values 
const user_name="h@itesh.com" //If the string is empty then it will be considered as false

if(user_name){
    console.log("Get user email")
}else{
    console.log("Did not get the user email")
}

//Falsy values= false,0, -0 , bigInt (0n), empty string, null, undefined, nan

//Truthy values= true, 1, non empty strings like "0", "false" (because they are under strings), function(){}=>Empty function

//Nullish Coalescing operator (??) it will be null or undefined
let val1;
val1=5??10

val1=null ?? 10

val1=null ?? 10 ?? 20
console.log(val1)

//Ternary operator
const iceTeaPrice= 100
iceTeaPrice<=80? console.log("Price less than 80"): console.log("Price is >80") 