import { getSaludo } from "../../src/base-pruebas/02-template-string"

describe('Probando la funcion getSaludo', () => {
  test('getSaludo debe de retornar "hola julian"', () => {
    const name = "Julian";
    const message = getSaludo(name);

    expect(message).toBe(`Hola ${name}`);
  })
  
})
