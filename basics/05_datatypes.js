//Primitive Data types- Strings, numbers, boolean, null, undefined , Symbol (Making values unique), BigInt (call by values)

//Non-Primitve Data Types- Arrays, objects, functions (call by reference)

//Symbol Data type 
const id=Symbol(123)
const anotherId= Symbol(123)

console.log(id==anotherId);

//Now non primitve data types 
const arrays=[1,2,4,5] 

const object= {
    "name":"Sayan",
    "Age":45
}

const myFunction = function(){
    console.log("Inside the function");
}

console.log(typeof arrays);

//Non-Primitve data types are objects always    