import { add, sub, multiply, divide } from "./calculator";

test('1 + 1 to equal 2', () => {
    expect(add(1, 1)).toEqual(2);
});

test('2 - 1 to equal 1', () => {
    expect(sub(2, 1)).toEqual(1);
});

test('2 * 2 to equal 4', () => {
    expect(multiply(2, 2)).toEqual(4);
});

test('6 / 3 to equal 2', () => {
    expect(divide(6, 3)).toEqual(2);
});