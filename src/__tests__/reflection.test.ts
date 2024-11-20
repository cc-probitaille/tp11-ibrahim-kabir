import { DynamicClassFactory } from '../reflection';

describe('DynamicClassFactory', () => {
    it('should throw an error if className is not provided', () => {
        expect(() => DynamicClassFactory.createClass('')).toThrow('Class name must be provided.');
    });

    it('should create a class with the given name', () => {
        const className = 'TestClass';
        const DynamicClass = DynamicClassFactory.createClass(className);
        expect(DynamicClass.name).toBe(className);
    });

    it('should create an instance of the dynamic class', () => {
        const className = 'TestClass';
        const DynamicClass = DynamicClassFactory.createClass(className);
        const instance = new DynamicClass();
        expect(instance).toBeInstanceOf(DynamicClass);
    });

    it('should log the correct message when an instance is created', () => {
        const className = 'TestClass';
        const DynamicClass = DynamicClassFactory.createClass(className);
        console.log = jest.fn();
        new DynamicClass();
        expect(console.log).toHaveBeenCalledWith(`Instance of ${className} created.`);
    });
});