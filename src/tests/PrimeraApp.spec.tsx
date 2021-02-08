// import { render } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";
import { shallow } from "enzyme";
import PrimeraApp from "../PrimeraApp";

describe("Pruebas en componente <PrimerApp />", () => {
  //   test('Debe de mostrar el mensaje "Hola Gustavo"', () => {
  //     const saludo = "Hola Gustavo";

  //     const wrapper = render(<PrimeraApp titulo={saludo} />);

  //     expect(wrapper.getByText(saludo)).toBeInTheDocument();
  //   });

  test("Debe de mostrar <PrimeraApp /> correctamente", () => {
    const saludo = "Hola Gustavo";
    const wrapper = shallow(<PrimeraApp titulo={saludo} />);
  });
});
