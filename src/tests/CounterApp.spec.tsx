import Enzyme, { shallow } from "enzyme";
import ReactSeventeenAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import { createSerializer } from "enzyme-to-json";

import CounterApp from "../CounterApp";

Enzyme.configure({ adapter: new ReactSeventeenAdapter() });
expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

describe("Prueba Componente <CounterApp />", () => {
  let wrapper = shallow(<CounterApp />);

  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });

  test("Renderiza <CounterApp /> mostrando el valor por defecto `123`", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe mostrar el componente con el valor enviado como parametro", () => {
    const wrapper = shallow(<CounterApp value={123} />);
    const textoValor = wrapper.find("h2").text().trim();
    expect(textoValor).toBe("123");
  });

  test("Debe de incrementar en +1 el valor del contador", () => {
    wrapper.find("button").at(0).simulate("click");
    const counterText = wrapper.find("h2").text().trim();
    expect(counterText).toBe("11");
  });

  test("Debe de decrementar en -1 el valor del contador", () => {
    wrapper.find("button").at(2).simulate("click");
    const counterText = wrapper.find("h2").text().trim();
    expect(counterText).toBe("9");
  });

  test("Debe de colocar el valor por defecto al precionar el boton de Reset", () => {
    const wrapper = shallow(<CounterApp value={123} />);
    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(1).simulate("click");

    const counterText = wrapper.find("h2").text().trim();
    expect(counterText).toBe("123");
  });
});
