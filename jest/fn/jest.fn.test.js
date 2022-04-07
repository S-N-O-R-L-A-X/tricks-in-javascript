/**
 * jest.fn() 
 * 
 */

describe('测试jest.fn()调用',() => {
    it('测试jest.fn()调用', () => {
        const mockFn = jest.fn();
        let result = mockFn(1, 2, 3);
    
        expect(result).toBeUndefined();//it will return undefined as default
        
        expect(mockFn).toBeCalled();// check whether the mock was called
        
        expect(mockFn).toBeCalledTimes(1);

        expect(mockFn).not.toBeCalledTimes(2);
        // 断言mockFn传入的参数为1, 2, 3
        expect(mockFn).toHaveBeenCalledWith(1, 2, 3);
    })

    it('测试jest.fn()调用', () => {
        const mockFn = jest.fn();
        let result = mockFn(1, 2, 3);
    
        expect(result).toBeUndefined();//it will return undefined as default
        
        expect(mockFn).toBeCalled();// check whether the mock was called
        
        expect(mockFn).toBeCalledTimes(1);

        expect(mockFn).not.toBeCalledTimes(2);
        
        expect(mockFn).toHaveBeenCalledWith(1, 2, 3);//judge parameters
        expect(mockFn).not.toHaveBeenCalledWith(1, 2);//judge parameters
    })
})
