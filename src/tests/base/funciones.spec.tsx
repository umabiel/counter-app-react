import { getUser, getUsetActivo } from "../../base/funciones";

describe("Prueba funciones", () => {
  test("getUser() should return an Object", () => {
    const userTest = { uid: "ABC123", username: "ElGuxor1010" };

    const user = getUser();

    expect(user).toEqual(userTest);
  });

  test("getUsetActivo() should return an active user", () => {
    const userTest = { uid: "ABC456", username: "Gustavo" };

    const user = getUsetActivo("Gustavo");

    expect(user).toEqual(userTest);
  });
});
