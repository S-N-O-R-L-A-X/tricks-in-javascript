/**
 * describe creates a block that groups together several related tests. 
 * describe can be nested
 * it and test can be used in describe, they have the same effects.
 */
describe('in the math global object', () => {
	describe('two plus two is four', () => {
		it('2+2=4', () => {
				expect(2 + 2).toBe(4);
		});
		
		
		it('2+2=4', () => {
				expect(2 + 2).not.toBe("4"); // toBe uses Object.is, so this is an error.
		});
	});

	describe('adding floating point numbers',()=>{
		test('adding floating point numbers', () => {
			const value = 0.1 + 0.2;
			expect(value).not.toBe(0.3);  // This works because of rounding error
		});


		test('adding floating point numbers', () => {
			const value = 0.1 + 0.2;
			expect(value).toBeCloseTo(0.3); // This works.
		});
	})
});