import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${({ width }) => width || "auto"};
  padding: ${({ padding }) => padding || "10px 25px"};
  margin: ${({ margin }) => margin || "10px 25px"};
  @media only screen and (min-width: 620px) {
    box-shadow: 5px 5px 10px #888888;
    padding: ${({ padding }) => padding || "20px 50px"};
    margin: ${({ margin }) => margin || "20px 50px"};
    width: ${({ width }) => width || "auto"};
  }
`;

export const BoxShadowWrapper = ({ children, padding, margin, width }) => {
  return (
    <StyledDiv padding={padding} margin={margin} width={width}>
      {children}
    </StyledDiv>
  );
};

BoxShadowWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
  padding: PropTypes.string,
  margin: PropTypes.string,
  width: PropTypes.string
};
