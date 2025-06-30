//Object Literal = Litrally an object

//this keyword is used for current context

const user = {
  userName: "Sayan",
  Login_Count: 8,
  Signed_in: true,
  getUserDetails: function () {
    // console.log("User Details from dataBase");
    // console.log(`UserName is: ${this.userName}`);
    // console.log(this); //It will print the current context means the whole user object
  },
};

// console.log(user.userName);
// console.log(user.getUserDetails());
user.getUserDetails();

//This is used to define current contexts

//New keyword is a kind of constructor function
// const promise = new Promise()

function user_function(userName, LoginCount, isLoggedin){
  this.userName=userName;
  this.LoginCount=LoginCount;
  this.isLoggedin=isLoggedin;

  return this;
}

const user1= new user_function("Sayan",4,true);
const user2= new user_function("Sayan",4,true);
console.log(user1);

console.log(user1.constructor())
