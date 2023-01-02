const methodKey = 'sayName';
const person = {
    [methodKey](name) {
        console.log(`My name is ${name}`);
    }
}

person.sayName("aaa"); // My name is aaa