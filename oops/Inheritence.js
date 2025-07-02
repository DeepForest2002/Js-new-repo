class User {
  constructor(user) {
    this.user = user;
  }
  logMe() {
    console.log(`The new userName is ${this.user}`);
  }
}

class Teacher extends User {
  constructor(user, email, password) {
    super(user);
    this.email = email;
    this.password = password;
  }

  AddCourse() {
    console.log(`A new course has been added by the teacher ${this.user}`);
  }
}

const chai = new Teacher("chai", "chai@gmail.com", "123");
chai.AddCourse();
