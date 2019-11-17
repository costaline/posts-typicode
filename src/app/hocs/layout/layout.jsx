import React from "react";
import PropTypes from "prop-types";

const Layout = (props) => {
  return <main>{props.children}</main>;
};

Layout.propTypes = {
  children: PropTypes.element
};

export default Layout;
