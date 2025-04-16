// Objects Part 2
// Singleton Objects in js

const newObj= new Object() 

const regularUser={
    name:{
        fullName:{
            firstName:"Sayan",
            LastName: "Pramanik"
        }
    }
}
console.log(regularUser.name.fullName.firstName)

//Combining many objects as one object
const obj1={1:'a',2:'b'}
const obj2={3:'a',4:'b'}
const obj3={5:'a',6:'b'}

//By normal methods 
// const obj4={obj1,obj2} 

// By Assign method  
const obj4=Object.assign({},obj1,obj2,obj3) //Assign all the values in the empty object 
// console.log(obj4) 

//By spread Operator 
const obj5={...obj1,...obj2, ...obj3}
// console.log(obj5)

console.log(Object.entries(regularUser))

//To check wheather an object contains a ceratin property or not 
console.log(regularUser.hasOwnProperty("fullName"))

console.log(Object.keys(regularUser.name))