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

1 - 8;
class Student {
  constructor(name, grade, id) {
    this.name = name;
    this.grade = grade;
    this.id = id;
  }
  printToLog() {
console.log(this.name,this.grade,this.id)
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
  constructor(name, grade, id, phone,listGrades) {
    super(name, grade, id);
    this.phone = phone;
    this.listGrades = listGrades;
  }
}
let highSchoolStu = new HighSchoolStudent("david",8,295643211,088977657,[98,87,65,45,90,100]);
console.log(highSchoolStu);
9.

class JuniorHighSchool extends Student {}
const dawit = new JuniorHighSchool("lior",12,314253665);
console.log(dawit);
dawit.printToLog();
