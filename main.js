class User {
  constructor(firsName, lastName, age) {
    this.firsName = firsName;
    this.lastName = lastName;
    this.age = age;
  }
}
class Student extends User {
  constructor(firsName, lastName, age, grade) {
    super(firsName, lastName, age);
    this.grade = grade;
  }
}
const newUser = new Student();
