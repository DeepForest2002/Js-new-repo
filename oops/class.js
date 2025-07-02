//Es6 classes
class user {
  constructor(userName, email, password) {
    this.userName = userName;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}abc`;
  }
}

const chai = new user("chai", "chai123@gmail.com", "123");
console.log(chai.encryptPassword());

//behind the scenes
function User(userName, email, password) {
  this.userName = userName;
  this.email = email;
  this.password = password;
}

User.prototype.enctyptUser = function () {
  return `${this.password}abc`;
};
User.prototype.changeUser = function () {
  return this.userName.toUpperCase();
};

const tea = new User("tea", "34343", "abc");
console.log(tea.changeUser());
