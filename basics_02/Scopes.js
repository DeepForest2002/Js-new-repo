//All this variables are global variables
let a=10
const b=20
var c=30

{
    let a=20
    let b=30
    //Variables under this scope is not accessible from outside
}

// console.table([a,b,c]) 

//Nested scope
function one(){
    const username="Sayan"

    function two(){
        const website="Youtube.com"
        console.log(username)
        console.log(website)
    }
    two()
}

// one() 

// +++++ interesting +++++
function addOne(value){
    return value+1
}
console.log(addOne(5)) 

// function store in a variable and this is called expression
const addTwo= (value)=>{
    return value+2;
}
addTwo(4)