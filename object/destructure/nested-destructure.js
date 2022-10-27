/**
 * 
 */
let person = {
    name: 'Matt',
    age: 27,
    job: {
        title: 'Software engineer',
        salary: 10000,
    }
};

const person2 = {};
({
    name: person2.name,
    age: person2.age,
    title: person2.job
} = person);
console.log(person2); // { name: 'Matt', age: 27, job: undefined }


const { name, age, job: { title } } = person;
console.log(name); // Matt
console.log(age); // 27
console.log(title); // Software engineer
