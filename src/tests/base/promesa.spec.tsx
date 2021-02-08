import heroes from "../../base/data";
import { getHeroeByIdAsync } from "../../base/promesa";

describe("Pruebas con Promesas", () => {
  test("getHeroesByIdAsync debe de retornar una Heroe Async", (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toEqual(heroes[0]);
      done();
    });
  });

  test("debe regresar error si ID no se encuentra", (done) => {
    const id = 10;
    getHeroeByIdAsync(10).catch((err) => {
      expect(err).toBe(`No se encontro Heroe con ID: ${id}`);
      done();
    });
  });
});
