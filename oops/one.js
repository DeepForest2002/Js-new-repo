//Object Literal

const user = {
  userName: "Sayan",
  Login_Count: 8,
  Signed_in: true,
  getUserDetails: function () {
    // console.log("User Details from dataBase");
    // console.log(`UserName is: ${this.userName}`);
    console.log(this); //It will print the current context means the whole user object
  },
};

console.log(user.userName);
// console.log(user.getUserDetails());
user.getUserDetails();

//This is used to define current contexts
