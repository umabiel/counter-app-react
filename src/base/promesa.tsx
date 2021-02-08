import { getHeroeById } from "./imp_exp";

export const getHeroeByIdAsync = (id: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const p1 = getHeroeById(id);
      if (p1) {
        resolve(p1);
      } else {
        reject(`No se encontro Heroe con ID: ${id}`);
      }
    }, 1500);
  });
};
