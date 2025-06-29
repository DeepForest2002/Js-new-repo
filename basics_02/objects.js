
//What is Objects is js -> Object is a non primitive data type in js where we store value in the form of kay and value pair 


const mysym= Symbol("Key1")

const object={
    name:"Sayan Pramnaik",
    Age:18,
    Email:"pramnaiksayan@google.com",
    isLoggedIn: false,
    LastLogIn: ["Monday","Sunday"],
    "Salary":150000, //This type of values can not be accesssed using . operators

    //Adding a symbol in the object 
    [mysym]:"KeyVal1"
}

//How to access object values 
// console.log(object.Age)

//Using [] operator
// console.log(object["name"])

// console.log(object["Salary"])
//Accessing the symbol value 
// console.log(object[mysym])

// console.log(object)

// Freeze the js Object so that is can not be manipulated 
// Object.freeze(object) 

//Adding function to a object
object.func=function(){
    console.log(`Hello,my name is ${this.name}`)
}
// object.func()
console.log(object)


