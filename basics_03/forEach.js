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
// function PrintName(item){
//     console.log(item)
// }
// coding.forEach(PrintName)

// objects inside array 

const myarray= [
    {
        languageName:"javaScript",
        languageFileName:'js'
    },
    {
        languageName:"Java",
        languageFileName:'java'
    },
    {
        languageName:"Python",
        languageFileName:'py'
    },
]

console.log(myarray.length)

for(let i=0;i<myarray.length;i++){
    console.log(myarray[i].languageName);
}

//Accessing this array element using foreach loop
myarray.forEach((item)=>{
    console.log(item.languageFileName);
})