import { getHeroeById } from "../../base/imp_exp";

describe("Prueba en funciones de Heroes", () => {
  test("Debe retornar un Heroe por ID", () => {
    const id = 1;
    const heroe = getHeroeById(id);
  });
});
