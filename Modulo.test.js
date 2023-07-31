const Modulo = require("./modulo");

test("el modulo de 4 % 2 es 0", () => {
  expect(Modulo(4, 2)).toBe(0);
});