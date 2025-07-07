class Chai {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  //Actually getters and setters overwrites the password and email field and getter setter functions are available for all the parameters that we define
  get email() {
    return this._email.toUpperCase();
  }

  set email(value) {
    this._email = value;
  }

  get password() {
    return this._password.toUpperCase();
  }
  set password(value) {
    this._password = value;
  }
}

const chai = new Chai("h@gmail.com", "Abc");
console.log(chai.email);
console.log(chai.password);
