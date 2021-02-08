import { retornaArreglo } from "../../base/arreglos";

describe("Pruebas con Arreglos", () => {
  test("retornaArreglo() debe retornar un string y un numero", () => {
    const arr = retornaArreglo();
    const [letras, numeros] = arr;
    expect(arr).toEqual(["ABC", 123]);

    expect(typeof letras).toBe("string");
    expect(typeof numeros).toBe("number");
  });
});
