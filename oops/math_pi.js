const chai = {
  name: "Ginger tea",
  price: 250,
  isAvailable: true,
  func: function () {
    console.log("chai nahi bni");
  },
};

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

//Chaneg this values

// Object.defineProperty(chai, "name", {
//   writable: false,
//   enumerable: false,
// });

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// Iterate through the objects

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key}:${value}`);
    }
}
