
const myObject= {
    js:"JavaScript",
    cpp : 'C++',
    py: "Python",
    Swift : "Swift"
}

//for in loop in js
for (const key in myObject) {
   console.log(`${key} for value ${myObject[key]}`)
}

// for in loop with Array (it takes by default keys)
const arr=['Apple','Banana']
for (const key in arr) {
    console.log(key) //for array its index are by default keys
}