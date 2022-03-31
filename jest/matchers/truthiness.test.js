test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined(); //opposite to toBeDefined
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy(); // null will be tranformed into false
  });
  
  test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy(); // 0 will be tranformed into false
  });