const Cuadrado = require('./ladoCuadrado');

test('el resultado de 4 ', () => {
  expect(Cuadrado(4)).toBe(256);
})