const { exportAllDeclaration } = require("@babel/types");
import {capitalize, reverseString, calculator, analyzeArray, caesarCipher} from "./index.js"

test('capitalize', () => 
    expect(capitalize("moRon")).toBe("MoRon")
)

test('reverseString', () =>
    expect(reverseString("life")).toBe("efil")
)

test('calculate', () => {

    expect(calculator.add(2,9)).toBe(11);
    expect(calculator.subtract(14,5)).toBe(9);
    expect(calculator.divide(25,5)).toBe(5);
    expect(calculator.multiply(7,8)).toBe(56);

})

test('analyzeArray', () => {
    expect(analyzeArray([1,2,3,4,5])).toMatchObject({
        average: 3,
        min: 1,
        max: 5,
        length: 5,
    });
})

test('caesarCipher', () => {
    expect(caesarCipher("abcdefghijklmnopqrstuvwxyz")).toMatch("bcdefghijklmnopqrstuvwxyza");
})