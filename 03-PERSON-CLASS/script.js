class Person {
    constructor(name,age,gender,qualification){
        this.name = name
        this.age = age
        this.gender = gender
        this.qualification = qualification
    }
}

const student = new Person('naveen', 24, 'Male', 'B.E')
const teacher = new Person('John', 35, 'Male', 'M.B.A')

console.log(student.name,student.age,student.gender,student.qualification, typeof student)
console.log(teacher.name,teacher.age,teacher.gender,teacher.qualification, typeof teacher)