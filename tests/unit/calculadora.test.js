const calculadora = require("../../models/calculadora");

test("Deve somar 1 + 2", () => {
  const result = calculadora.somar(1, 2);
  expect(result).toBe(3);
  console.log(result);
});

test("Deve somar 5 + 100", () => {
  const result = calculadora.somar(5, 100);
  expect(result).toBe(105);
  console.log(result);
});

test("Deve somar 'teste' + 100 deve retornar 'Erro'", () => {
  const result = calculadora.somar("Erro", 100);
  expect(result).toBe("Erro");
  console.log(result);
});
