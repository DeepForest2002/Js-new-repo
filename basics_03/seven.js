// We will learn about map which will be applied to every elements 

const myNumbers= [1,2,4,5,6,7,8,9]
// const newNums= myNumbers.map((item)=>{
//     return item+10;
// })

//Chaining applying two or more methods together
const newNumbers=myNumbers.map((item)=>{
                        return item*10;
                    }).map((item)=>{
                        return item+1;
                    }).filter((item)=>{
                        return item>=35;
                    })

console.log(newNumbers)