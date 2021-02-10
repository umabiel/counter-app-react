import Enzyme, { shallow } from "enzyme";
import ReactSeventeenAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import { createSerializer } from "enzyme-to-json";

import PrimeraApp from "../PrimeraApp";

Enzyme.configure({ adapter: new ReactSeventeenAdapter() });
expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

describe("Pruebas en componente <PrimerApp />", () => {
  //   test('Debe de mostrar el mensaje "Hola Gustavo"', () => {
  //     const saludo = "Hola Gustavo";
  //     const wrapper = render(<PrimeraApp titulo={saludo} />);
  //     expect(wrapper.getByText(saludo)).toBeInTheDocument();
  //   });

  test("Debe de mostrar <PrimeraApp /> correctamente", () => {
    const saludo = "Hola Gustavo";
    const wrapper = shallow(<PrimeraApp titulo={saludo} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe renderizar el subtitulo", () => {
    const saludo = "Hola Gustavo";
    const subtitutlo = "SubaruForester";
    const wrapper = shallow(
      <PrimeraApp titulo={saludo} subtitulo={subtitutlo} />
    );
    const textoParrafo = wrapper.find("p").text();
    expect(textoParrafo).toBe(subtitutlo);
  });
});
