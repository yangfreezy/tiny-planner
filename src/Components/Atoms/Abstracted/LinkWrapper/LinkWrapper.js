import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  cursor: pointer;
  margin: 0px 0px;
`;

export const LinkWrapper = ({ to, children }) => {
  return <StyledLink to={to}>{children}</StyledLink>;
};

LinkWrapper.propTypes = {
  to: PropTypes.string,
  children: PropTypes.element
};
