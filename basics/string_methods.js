let string="Hello, I am a student of Bagnan College"

console.log(string.length)
//Accessing chars at,CharAt, charcodeat 
console.log(string.at(19))

console.log(string.charCodeAt(19))

//In new js update we can use negative indexing in at function but not in charat function 
console.log(string.at(-2))


//We have some methods to extract some parts of string in js - slice, substring, substr
console.log(string.substring(8,19))


//converting string to lower case and upper case - toLowerCase and toUpperCase function 
console.log(string.toLowerCase())
console.log(string.toUpperCase())

//Replacing words in a string - replace and replaceAll 
console.log(string.replace('College','Office'))


let newString="I love google , I want to work in google"
console.log(newString.replaceAll('google','Microsoft'))

//Converting a string into an array using split methods 
let newString2='a|b|c|d|e'
// newString2.replaceAll(',','|')
console.log(newString2)
let my_arr= newString2.split('|')
console.log(my_arr)