const add = require("./add.js");

test("Empty string should return 0", () => {
    expect(add("")).toBe(0);
})

test("Single number should return the number itself", () => {
    expect(add("11")).toBe(11);
})

test("two comma seperated numbers should return it's sum", () => {
    expect(add("1,5")).toBe(6);
})

test("multiple comma seperated numbers should return it's sum", () => {
    expect(add("1,5,9,95")).toBe(110);
})

test("new line between numbers should return it's sum", () => {
    expect(add("1\n2,3")).toBe(6);
})

test("should support custom delimiters", () => {
    expect(add("//;\n1;2")).toBe(3);
})

test("negative numbers should throw an exception", () => {
    expect(() => add("-10,1,3,-4")).toThrow("Negative numbers not allowed: -10, -4");
})

test("numbers bigger than 1000 should be ignored", () => {
    expect(add("//;\n1001;2")).toBe(2);
})