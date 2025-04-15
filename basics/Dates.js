//Dates in js

let MyDate= new Date()
// console.log(MyDate.toString())
// console.log(MyDate.toDateString()) //Gives the current date 
// console.log(MyDate.toISOString())

//console.log(typeof MyDate) //Gives object as output 


//To declear a specific date (The syntax of date is yyyy-mm-dd)
// let myCreatedDate=new Date(2023,0,23) 
let myCreatedDate=new Date("2023-01-14")
//console.log(myCreatedDate.toDateString()) //Months starts from 0 based indexing 

//In India we used to write date in the form of mm-dd-yyyy
let myIndianDate= new Date("09-24-2002")
//console.log(myIndianDate.toDateString())


let myTimeStamp=new Date()
console.log(myTimeStamp.getMonth())

let string=`The day is ${myTimeStamp.getDay()} and the time is ${myTimeStamp.getTime()}`
console.log(string)

