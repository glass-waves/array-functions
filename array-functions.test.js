const { mapFunc, filterFunc, findIndexFunc, reduceFunc, everyFunc, forEachFunc } = require("./array-functions");

describe('array function recreations', () => {
    
    describe('map function', () => {
        it('should take in an array of numbers and return another array with the numbers multiplied by 2', () => {
            const arr = [1, 5, 6, 8, 9, 3, 4];
    
            const result = mapFunc(arr, (n) => n * 2);
    
            const expectation = [2, 10, 12, 16, 18, 6, 8]
    
            expect(result).toEqual(expectation)
        });
        it('should take in an array of strings and return another array with the strings with an added space', () => {
            const arr = ['dog', 'cat', 'broom', 'bird', 'dog', 'dog'];
    
            const result = mapFunc(arr, (n) => n + ' ');
    
            const expectation = ['dog ', 'cat ', 'broom ', 'bird ', 'dog ', 'dog ']
    
            expect(result).toEqual(expectation)
        });
    });

    describe('filter function', () => {
        it('should take an array of numbers and return an array of only the even numbers',() => {

            const arr = [1, 5, 6, 8, 9, 3, 4];
            const result = filterFunc(arr, (n) => n % 2 === 0);
            const expectation = [6, 8, 4];
            expect(result).toEqual(expectation)
        });
        it('should take an array of strings and return an array of only the strings starting with the letter b',() => {

            const arr = ['dog', 'cat', 'broom', 'bird', 'dog', 'dog'];            
            const result = filterFunc(arr, (n) => n.startsWith('b'));
            const expectation = ['broom', 'bird'];
            expect(result).toEqual(expectation)
        });
    });

    describe('find index function', () => {
        it('should take an array of numbers and return the index of the first even number',() => {

            const arr = [1, 5, 6, 8, 9, 3, 4];
            const result = findIndexFunc(arr, (n) => n % 2 === 0);
            const expectation = 2;
            expect(result).toEqual(expectation)
        });
        it('should take an array of strings and return an array of only the strings starting with the letter b',() => {

            const arr = ['dog', 'cat', 'broom', 'bird', 'dog', 'dog'];            
            const result = findIndexFunc(arr, (n) => n.startsWith('b'));
            const expectation = 2;
            expect(result).toEqual(expectation)
        });
    });

    describe('reduce function', () => {
        it('should take an array of numbers and return the sum of the numbers',() => {

            const arr = [1, 5, 6, 8, 9, 3, 4];
            const result = reduceFunc(arr, (acc, item) => acc + item, 0);
            const expectation = 36;
            expect(result).toEqual(expectation)
        });
        it('should take an array of strings and return an object with properties matching the strings and values of 1',() => {

            const arr = ['dog', 'cat', 'broom', 'bird', 'dog', 'dog'];            
            const result = reduceFunc(arr, (acc, item) => {
                acc[item] = 1;
                return acc;
            } , {});

            const expectation = {
                dog: 1,
                cat: 1,
                broom: 1,
                bird: 1,
                dog: 1,
                dog: 1,
            };
            expect(result).toEqual(expectation)
        });
    });

    describe('every function', () => {
        it('should take an array of numbers and return true if all numbers are even',() => {

            const arr = [16, 12, 6, 8, 10, 2, 4];
            const result = everyFunc(arr, (n) => n % 2 === 0);
            const expectation = true;
            expect(result).toEqual(expectation)
        });
        it('should take an array of strings and return true only if all the strings start with the letter b',() => {

            const arr = ['dog', 'cat', 'broom', 'bird', 'dog', 'dog'];            
            const result = everyFunc(arr, (n) => n.startsWith('b'));
            const expectation = false;
            expect(result).toEqual(expectation)
        });
    });
    describe('forEach function', () => {
        it('it should call a function for each member of the array',() => {
            const arr = [16, 12, 6, 8, 10, 2, 4];
            const mockCallback = jest.fn((item, index) => {
                return `Item: ${item} Index: ${index}`
            })
            forEachFunc(arr, mockCallback)
            expect(mockCallback.mock.calls.length).toBe(7);
            expect(mockCallback.mock.results[0].value).toBe('Item: 16 Index: 0');
        });
    });
    





});