// JavaScript Challenge Solution with Class

// Class to represent a Student
class Student {
    constructor(name, age, examScore) {
      this.name = name;
      this.age = age;
      this.examScore = examScore;
      this.grade = this.calculateGrade();
    }
  
    // Method to calculate the grade based on the grading criteria
    calculateGrade() {
      if (this.examScore >= 90) {
        return "A";
      } else if (this.examScore >= 80) {
        return "B";
      } else if (this.examScore >= 70) {
        return "C";
      } else {
        return "D";
      }
    }
  }
  
  let student = new Student("John", 20, 95)
  let student1 = new Student("Alice", 22, 85)
  let student2 = new Student("Bob", 19, 75)

let studentList = [student,student1,student2];
  
  
  // Display student details
  for (let i = 0; i < studentList.length; i++) {
    let student = studentList[i];
    console.log(`Student ${i + 1}:`);
    console.log(`Name: ${student.name}, Age: ${student.age}, Exam Score: ${student.examScore}, Grade: ${student.grade}`);
    console.log("\n");
  }