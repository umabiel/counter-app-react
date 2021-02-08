import "@testing-library/jest-dom";
import { getSaludo } from "../../base/template-string";

describe("Pruebas en Template String  | Jest", () => {
  test("getSaludos() debe retornar `Hola Gustavo`", () => {
    const nombre = "Gustavo";

    const saludo = getSaludo(nombre);
    expect(saludo).toBe(`Hola ${nombre}`);
  });

  test("getSaludo() debe retornar `Hola Carlos` si no se envia argumentos", () => {
    const saludo = getSaludo();
    expect(saludo).toBe("Hola Carlos");
  });
});
