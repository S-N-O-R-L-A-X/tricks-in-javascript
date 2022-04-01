/** 
 * toBe uses Object.is
*/

test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
});


test('two plus two is four', () => {
    expect(2 + 2).not.toBe("4"); // toBe uses Object.is, so this is an error.
});

/** 
 * not.toBe
*/

test('adding positive numbers is not zero', () => {
    for (let a = 1; a < 10; a++) {
        for (let b = 1; b < 10; b++) {
            expect(a + b).not.toBe(0);
        }
    }
});

/**
 * toEqual isUsed for checking values
 */

test('object assignment', () => {
    const data = { one: 1 };
    data['two'] = 2;
    expect(data).toEqual({ one: 1, two: 2 });
});