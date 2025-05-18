//Using Array.reduce function (Initial_val, accumulator and currentvalue)

const myNums=[1,2,3,4,5]

const MyTotal= myNums.reduce((acc,currval)=>{
    // console.log(`acc is ${acc} and currval is ${currval}`)
    return acc+currval;
},0)

// console.log(MyTotal)

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
//Get the total value present in the cart

const Total_price=shoppingCart.reduce((acc,curval)=>{
    return acc+curval.price;
},0);
console.log(Total_price)