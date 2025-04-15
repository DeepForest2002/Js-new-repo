//This is the second part of arrays 
const marvel_heros=["IronMan","Hulk","Thor"]
const dc_heros=["Flash","Batman","Superman"]


//marvel_heros.push(dc_heros) //Push the whole array in the last part but this method is not recommended 
// console.log(marvel_heros)

//let new_arr=marvel_heros.concat(dc_heros)
//console.log(new_arr)

//Spread_Operator 
const all_heros=[...marvel_heros,...dc_heros]
console.log(all_heros)

//Flat array - Makes a multi dimensional array into a one dimensional array
const another_arr=[1,1,3,[4,5,6],[4,[8,9]]]
const real_another_arr=another_arr.flat(3)
console.log(real_another_arr)