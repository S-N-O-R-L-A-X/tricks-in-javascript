'use strict';
let book = {};
Object.defineProperties(book, {
    year_: {
        value: 2017
    },
    edition: {
        value: 1
    },
    year: {
        get() {
            return this.year_;
        },
        set(newValue) {
            if (newValue > 2017) {
                this.year_ = newValue;
                this.edition++;
            }
        }
    }
});

console.log(book.edition); // 1
// book.edition = 5; // TypeError: Cannot assign to read only property 'edition' of object '#<Object>'
// console.log(book, edtion);

console.log(book.year_); // 2017
// book.year_ = 2000; // TypeError: Cannot assign to read only property 'year_' of object '#<Object>'
// console.log(book, year_);

console.log(book.year); // 2017
// book.year = 2040; // TypeError: Cannot assign to read only property 'year_' of object '#<Object>'
// console.log(book, year);

