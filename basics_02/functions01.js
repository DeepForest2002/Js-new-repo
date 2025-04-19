// Function is a group of code which runs when we call them 

//function syntax
function print(){
    console.log("Hitesh Manna")
}


function addTwoNumbers(number1, number2){
    return number1+number2
}

//Whenever a function returns a value we have to store this in a var otherwise it will not perform correctly

console.log(addTwoNumbers(11,12))


//Second example
function add(number1, number2){
    console.log(number1+number2)
}

const variable=add(2,3) //Output add will be called and gives output of 5 and undefined is assigned to variable

function LogInUserMessage(userName="Jhon Doe"){
    if(userName===undefined){ //or we can say if(!userName)
        return "Please enter user name"
    }
    return `${userName} just logged in`
}
console.log(LogInUserMessage())