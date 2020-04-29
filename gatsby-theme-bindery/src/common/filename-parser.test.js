const parser = require("./filename-parser");

describe(".number()", () => {
  const { number } = parser;

  it("returns chapter number", () => {
    expect(number("/1-foo/")).toBe(1);
    expect(number("/02-bar/")).toBe(2);
    expect(number("/42-bar/")).toBe(42);
    expect(number("/1-2-3/")).toBe(1);
    expect(number("/1337/")).toBe(undefined);
    expect(number("/f00/")).toBe(undefined);
    expect(number("/84r/")).toBe(undefined);
  });
});
