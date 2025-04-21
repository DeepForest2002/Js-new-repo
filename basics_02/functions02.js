// How to calculate cart values in js 
function CalculateCartVal(...num1){
    return num1;
}

console.log(CalculateCartVal(200,300,500))

//Passing objects in the function 
const user={
    Username: "Sayan",
    Price: 199
}
function UserDetails(anyobject){
    return `The name of the user is ${anyobject.Username} and the price of his course is ${anyobject.Price}`
}
// console.log(UserDetails(user))

// one more way to pass this object is 
console.log(UserDetails({
    Username:"Sayan",
    Price:566
}))

//Passing arrays in the function
const arr=[1,2,3,4,5]
