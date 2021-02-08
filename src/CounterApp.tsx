import { Fragment, useState } from "react";

interface IProps {
  value: number;
}

const CounterApp = ({ value }: IProps) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleSubs = () => {
    setCounter(counter - 1);
  };

  const handleReset = () => {
    setCounter(value);
  };

  return (
    <Fragment>
      <h1>CounterApp</h1>
      <h2> {counter} </h2>

      <button onClick={handleAdd}> + 1 </button>
      <button onClick={handleReset}> Reset </button>
      <button onClick={handleSubs}> - 1 </button>
    </Fragment>
  );
};

export default CounterApp;
