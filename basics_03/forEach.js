const coding=["Js",'Ruby',"Python","Cpp"]


//For each loop takes callback function which has no parameters
coding.forEach(function (item){
    // console.log(item)
})

//Arrow function 
coding.forEach((item)=>{
    // console.log(item)
})

//we can also give a function as a parameter in the forEach loop
function PrintName(item){
    console.log(item)
}
coding.forEach(PrintName)