class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}
class Bootcamp {
    constructor(name, level, students = []) {
        this.name = name;
        this.level = level;
        this.students = students;
    }
    registerStudent(newStudent) {
        // console.log(`Registering ${this.email} to the bootcamp ${this.level}.`);

        // check if newStudent email matches any current students email.
        const check = this.students.filter(student => student.email === newStudent.email);
        // check.length
        // If match exists throw error!
        if (check.length > 0) {
            console.log('This student already exist!')
        }
        // Otherwise add new student to existing students!
        else {
            this.students.push(newStudent);
            console.log(`Registering ${newStudent.email} to the bootcamp Web Dev Fundamentals.`)
        }
        return this.students;
    }
}

















