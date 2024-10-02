const add = require("./add.js");

test("Empty string should return 0", () => {
    expect(add("")).toBe(0);
})

test("Single number should return the number itself", () => {
    expect(add("11")).toBe(11);
})