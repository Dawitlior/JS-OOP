// class User {
//   constructor(firsName, lastName, age) {
//     this.firsName = firsName;
//     this.lastName = lastName;
//     this.age = age;
//   }
// }
// class Student extends User {
//   constructor(firsName, lastName, age, grade) {
//     super(firsName, lastName, age);
//     this.grade = grade;
//   }
// }
// const newUser = new Student();

1 - 4;
class Student {
  constructor(name, grade, id) {
    this.name = name;
    this.grade = grade;
    this.id = id;
  }
}
let firstShow = new Student("lior", 12, 344223456);
let firstShow1 = new Student("lidor", 2, 325832456);
console.log(firstShow, firstShow1);

class CollegeStudent extends Student {
  constructor(name, grade, id, hight) {
    super(name, grade, id);
    this.hight = hight;
  }
}
let collStudent = new CollegeStudent("lior", 11, 233211457, 1.69);
console.log(collStudent);

class HighSchoolStudent extends Student {
  constructor(name, grade, id, phone) {
    super(name, grade, id);
    this.phone = phone;
  }
}
let highSchoolStu = new HighSchoolStudent("david",8,295643211,088977657);
console.log(highSchoolStu);
