function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

Student.prototype.setSubject = function (subjectName) { 
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if (this.hasOwnProperty("marks")) {
        for (let i = 0; i < marks.length; i++) {
            this.marks[i] = marks[i];
        }
    }
}

Student.prototype.getAverage = function () {
    if (this.hasOwnProperty("marks") && this.marks.length > 0) {
        let marksSum = 0;
        for (let i = 0; i < this.marks.length; i++) {
            marksSum += this.marks[i];
        }

        return (marksSum / this.marks.length).toFixed(1);
    }

    return 0;
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}
