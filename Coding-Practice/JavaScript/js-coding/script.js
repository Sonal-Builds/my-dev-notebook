// Class in Js

class Student {
    // name;
    // yob;

    constructor(name,yob) {
        this.name = name;
        this.yob = yob
    }

    static PrintMaxYob(...args) {
            var arr = args.map((item) => item.yob)
            console.log(Math.max(...arr))
    }

    getAge() {
        return new Date().getFullYear() - this.yob;
    }

    getName(newName) {
        return `${newName} ${this.name}`;
    }
}

// outside Class Static Function

// Student.PrintMinYob = (...args) => {
//     var arr = args.map((item) => item.yob)
//     console.log(Math.min(...arr))
// }



const student1 = new Student('sonal',1992);
const student2 = new Student('Ravi',1994);
const student3 = new Student('Sam',2000);

// console.log(student1.getAge())
console.log(student1.getName('Amala'))
Student.PrintMaxYob(student1,student2,student3)

