const myArr=[1,2,4,5,"true","Hitesh"]
console.log(typeof myArr) //It is a type of object

console.log(myArr.length)

//Join method in array 
const newArr= myArr.join()
console.log(myArr) //This is a array
console.log(newArr) //This is a string


//Slice and Splice methods in array

const newArr1=[1,2,3,4,5,6]
const myar1= newArr1.slice(1,3)
console.log(myar1) //Slice does not manipulate the original array but splice does 

const myar2=newArr1.splice(1,3)
console.log(myar2)
console.log(newArr1)
