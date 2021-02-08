import { Fragment, ReactNode } from "react";
import PropTypes from "prop-types";

interface IProps {
  titulo?: ReactNode;
  subtitulo?: ReactNode;
}

// FC
const PrimeraApp = ({ titulo, subtitulo }: IProps) => {
  return (
    <Fragment>
      <h1> {titulo} </h1>
      <p>SubTitulo: {subtitulo}</p>
    </Fragment>
  );
};

PrimeraApp.propTypes = {
  titulo: PropTypes.string.isRequired,
};

PrimeraApp.defaultProps = {
  titulo: "NONE",
};

export default PrimeraApp;
