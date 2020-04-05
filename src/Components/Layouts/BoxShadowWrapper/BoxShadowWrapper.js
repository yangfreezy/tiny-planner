import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 25px;
  @media only screen and (min-width: 620px) {
    box-shadow: 5px 5px 10px #888888;
    padding: 20px 50px;
  }
`;

export const BoxShadowWrapper = ({ children }) => {
  return <StyledDiv>{children}</StyledDiv>;
};

BoxShadowWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element])
};
