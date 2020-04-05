import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: ${({ alignItems }) => alignItems || "center"};
  justify-content: ${({ justifyContent }) => justifyContent || "center"};
  margin: ${({ margin }) => margin || "0"};
  padding: ${({ padding }) => padding || "0"};
  width: ${({ width }) => width || "100%"};
  max-width: ${({ maxWidth }) => maxWidth || "100%"};
  height: ${({ height }) => height || "100%"};
`;

export const Row = ({
  children,
  margin,
  padding,
  alignItems,
  justifyContent,
  width,
  maxWidth,
  height
}) => {
  return (
    <StyledRow
      alignItems={alignItems}
      margin={margin}
      padding={padding}
      width={width}
      justifyContent={justifyContent}
      maxWidth={maxWidth}
    >
      {children}
    </StyledRow>
  );
};

Row.propTypes = {
  alignItems: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
  justifyContent: PropTypes.string,
  width: PropTypes.string,
  maxWidth: PropTypes.string,
  height: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string
};
