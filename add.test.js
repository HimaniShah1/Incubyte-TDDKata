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