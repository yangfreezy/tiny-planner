import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledPrimaryButton = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};
  background-color: ${({ backgroundColor }) => backgroundColor || "black"};
  color: ${({ color }) => color || "white"};
  font-size: ${({ fontSize }) => fontSize || "12px"};
  line-height: ${({ fontSize }) => fontSize || "12px"};
  margin: ${({ margin }) => margin || "10px 10px 10px 10px"};
  padding: ${({ padding }) => padding || "15px 25px 15px 25px"};
  // Box shadow is a boolean
  box-shadow: ${({ boxShadow }) =>
    boxShadow ? "5px 5px 10px #888888" : "none"};
  &:hover {
    box-shadow: 5px 5px 10px #888888;
    transition: box-shadow 0.2s ease-in-out;
  }
`;

export const PrimaryButton = ({
  handleClick,
  value,
  width,
  height,
  backgroundColor,
  color,
  fontSize,
  margin,
  padding,
  boxShadow
}) => {
  return (
    <StyledPrimaryButton
      onClick={handleClick}
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      color={color}
      fontSize={fontSize}
      margin={margin}
      padding={padding}
      boxShadow={boxShadow}
    >
      {value}
    </StyledPrimaryButton>
  );
};

PrimaryButton.propTypes = {
  handleClick: PropTypes.func,
  value: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  boxShadow: PropTypes.bool
};
