const score =400
// console.log(score)

const balance= new Number(100)
// console.log(balance)

// console.log(balance.toString())
// console.log(typeof balance.toString())

//Adding decimel values 
// console.log(balance.toFixed(2))


const otherNumber=23.8966
console.log(otherNumber.toPrecision(2))

const otherNumbers=10000
// console.log(otherNumbers.toLocaleString('en-IN'))


//+++++ Maths in Javascript ++++++////

//console.log(Math.abs(-10))
//console.log(Math.round(4.6)) //It rounds the number 

//Celling and floor value 
// console.log(Math.ceil(4.2))

// console.log(Math.floor(4.5))

//Square root method in js 

//Math random method in js - it only choose the value between 0 and 1 
console.log(Math.random())

//To avoid 0 values and 
console.log(Math.random()*10+1)  //It will give decimel values to get proper values 

console.log(Math.floor(Math.random()*10)+1)


// Sometimes we are given with a range of minimum and maximum  
const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min)


//Understanding the basics in js 
console.log("Understanding the basics of math random function in js ")

console.log(Math.floor(Math.random()*10)+1)
