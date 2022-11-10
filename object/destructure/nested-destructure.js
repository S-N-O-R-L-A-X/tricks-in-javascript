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

const person3 = {};
try {
    ({
        job: {
            title: person3.job.title // TypeError: Cannot set property 'title' of undefined
        }
    } = person);
}
catch (err) {
    console.log(err);
}

const person4 = { job: {} };
({
    job: {
        title: person4.job.title // TypeError: Cannot set property 'title' of undefined
    }
} = person);
console.log(person4); // { job: { title: 'Software engineer' } }