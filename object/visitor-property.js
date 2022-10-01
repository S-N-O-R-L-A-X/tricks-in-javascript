/**
 * A typical scene of visitor property is where a value will be modified because of other values.
 * Getter and setter needn't be defined at the same time.
 * If there exists getter only, modifying property will be ignored. In strict mode, it will raise error.
 * If there exists setter only, reading property will return undefined. In strict mode, it will raise error.
 */

let book = {
    year_: 2017,
    edition: 1
};

Object.defineProperty(book, "year", {
    get() {
        return this.year_;
    },
    set(newValue) {
        if (newValue > 2017) {
            this.year_ = newValue;
            this.edition++;
        }
    }
});

book.year = 2018;
console.log(book.edition); // 2

book.year = 2019;
console.log(book.edition); // 3


// Getter and setter needn't be defined at the same time.
// If there exists getter only, modifying property will be ignored. In strict mode, it will raise error.
let author = {
    firstName_: "Jonathan",
    lastName_: "Po"
}

Object.defineProperty(author, "firstName", {
    get() {
        return this.firstName_;
    }
})

console.log(author.firstName); //Jonathan

author.firstName = "Jason"; // raise error when strict: TypeError: Cannot set property firstName of #<Object> which has only a getter
console.log(author.firstName); //Jonathan

let hiddenProperty = {
    prop1_: "red",
    prop2_: 0
}

Object.defineProperty(hiddenProperty, "prop1", {
    set(value) {
        this.prop1_ = value
        this.prop2_++;
    }
})

console.log(hiddenProperty.prop1); // undefined raise error when strict
hiddenProperty.prop1 = "green";
console.log(hiddenProperty.prop1); // undefined
