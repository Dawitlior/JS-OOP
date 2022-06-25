class User {
  constructor(firsName, lastName, age) {
    this.firsName = firsName;
    this.lastName = lastName;
    this.age = age;
  }
}
class Student1 extends User {
  constructor(firsName, lastName, age, grade) {
    super(firsName, lastName, age);
    this.grade = grade;
  }
}
const newUser = new Student1("john", "doe", 10, 10);
//---------------------------------------------------------------
1 - 13;
class Student {
  constructor(name, grade, id) {
    this.name = name;
    this.grade = grade;
    this.id = id;
  }
  printToLog() {
  console.log(`first name:${this.name},grade:${this.grade},id:${this.id}`);
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
  constructor(name, grade, id, phone, listGrades) {
    super(name, grade, id);
    this.phone = phone;
    this.listGrades = listGrades;
  }
  printToLog() {
    console.log("hello");
    return `${super.printToLog()},grade:${this.grade},listGrade${this.listGrades}`;
  }
}
let highSchoolStu = new HighSchoolStudent(
  "david",
  8,
  295643211,
  088977657,
  [98, 87, 65, 45, 90, 100]
);
console.log(highSchoolStu);

class JuniorHighSchool extends Student {}
const dawit = new JuniorHighSchool("lior", 12, 314253665);
console.log(dawit);
dawit.printToLog();

class BestOfStudents extends Student {
  constructor(name, grade, id, phone, eyeColor, hight) {
    super(name, grade, id);
    this.phone = phone;
    this.eyeColor = eyeColor;
    this.hight = hight;
  }
}
const someShow = new BestOfStudents("lior",12,299833993,0546775643,"green",1.84);
console.log(someShow);

class SmartestStudent extends BestOfStudents{
  constructor(name, grade, id, phone, eyeColor, hight,isPastTest,gradesList){
    super(name, grade, id, phone, eyeColor, hight);
    this.isPastTest = isPastTest;
    this.gradesList = gradesList;
  }
}

const someShow1 = new SmartestStudent("lior",14,299788433,057674211,"green",1.84,true,[91,95,87,79,83,97,100]);
console.log(someShow1);

class AnotherSmartStudent extends SmartestStudent{}
const someShow2 = new AnotherSmartStudent("dawit",12,2222222,3333333,"red",189,true,[98,78,76,88,66,78,99])
console.log(someShow2);
someShow2.printToLog();