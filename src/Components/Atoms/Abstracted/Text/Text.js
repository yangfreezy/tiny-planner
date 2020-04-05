import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledText = styled.div`
  line-height: "auto";
  text-wrap: wrap;
  word-wrap: break-word;
  align-items: ${({ alignItems }) => alignItems || "center"};
  text-align: ${({ textAlign }) => textAlign || "center"};
  margin: ${({ margin }) => margin || "10px 0px"};
  padding: ${({ padding }) => padding || "0px"};
  width: ${({ width }) => width || "auto"};
  max-width: ${({ maxWidth }) => maxWidth || "none"};
  font-size: ${({ fontSize }) => fontSize || "14px"};
  font-weight: ${({ fontWeight }) => fontWeight || "normal"};
  color: ${({ color }) => color || "black"};
`;

export const Text = ({
  children,
  text,
  alignItems,
  textAlign,
  margin,
  padding,
  width,
  maxWidth,
  fontSize,
  fontWeight,
  color,
  boxShadow
}) => {
  return (
    <StyledText
      alignItems={alignItems}
      textAlign={textAlign}
      margin={margin}
      padding={padding}
      width={width}
      maxWidth={maxWidth}
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
      boxShadow={boxShadow}
    >
      {text || children}
    </StyledText>
  );
};

Text.propTypes = {
  handleClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
    PropTypes.string
  ]),
  text: PropTypes.string,
  alignItems: PropTypes.string,
  textAlign: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  width: PropTypes.string,
  maxWidth: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  color: PropTypes.string
};
