//Suppose i have a string and i want to get the full length of it

//How oops works with objects itself

const Another_user_name = "Sayan       ";

String.prototype.trueLenght = function () {
  return this.trim().length;
};
console.log(Another_user_name.trueLenght());

let new_obj = {
  user_name: "Sayan",
  isLoggedIn: true,
  details: function () {
    console.log(`The name of the user is ${this.user_name}`);
  },
};

Object.prototype.hitesh = function () {
  console.log("This is an object property");
};
new_obj.hitesh();
