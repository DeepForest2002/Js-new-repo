
//Create an object 
const userName={
    user: "Sayan",
    price: 999,

    welcomemessage: function(){
        //This referes to the current expression/condition
        console.log(`${this.user}, welcome to our website`)
    }
}

// userName.welcomemessage()

// userName.user="Sam"
// userName.welcomemessage()
console.log(this) //This will give empty object as it is not in browser but if it was browser then it would be the window object as window object is an global object

function one(){
    console.log(this)
}
// one() => this will give so many values 


//Arrow function
const fnc=()=>{
    return "Hello my name is Sayan Praanik and i am a student of benapur chandanapara high school"
}
console.log(fnc())

//Implicit return in arrow function when we use paranthesis we dont use return statement
const addTwoNumbers= (num1, num2)=>(num1+num2)
console.log(addTwoNumbers(6,7))