//  IIFE - Immidiately invoked fucntion expression 

// It is used to remove global scope pollution 

// Syntax of iife ius () and () first is for function defnition and second is for function call 

(function chai(){
    console.log("DB Connected")
}) (); //named iife 


// passing params in iife 
((name)=>{
    console.log(`Hello my name is ${name}`)
}) ('Sayan')