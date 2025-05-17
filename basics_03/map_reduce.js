//Map is like object containing key value pair but the main diff is it can not contains duplicate values and it is unordered

const map=new Map()
//Inserkting values in the map 
map.set('Ind','India')
map.set('Usa','United States of America')
// map.set('Ind','India')

//Applying for of loop in the map
for (const [key, value] of map) {
    console.log(`${key}->${value}`)
}

//this kind of for each loop can not be applied on objects