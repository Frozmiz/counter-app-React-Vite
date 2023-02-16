import React from "react";
import ReactDOM from "react-dom/client";
import { Fragment } from "react";
import PropTypes from "prop-types";

const FirstApp = ({ title, numero }) => {
  return (
    <Fragment>
      <h2>{ title }</h2>
      <h2>Esta es mi primera app con vite + React</h2>
      <p> Papasito que velosss que va esta weadaaaaa!</p>
      <h4> { numero }</h4>
    </Fragment>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  numero: PropTypes.number
};

FirstApp.defaultProps = {
  title: "Hola me llamo hola",
  numero: 23
};

export default FirstApp;
