function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function () {
        console.log(this.name);
    };
}

const person1 = new Person("Nicholas", 29, "Software Engineer");
const person2 = new Person("Greg", 27, "Doctor");
console.log(person1.sayName === person2.sayName);

function Person2(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = sayName;
};

function sayName() {
    console.log(this.name);
}

const person3 = new Person("Nicholas", 29, "Software Engineer");
const person4 = new Person("Greg", 27, "Doctor");
console.log(person3.sayName === person4.sayName);
