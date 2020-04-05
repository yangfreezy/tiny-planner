import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ alignItems }) => alignItems || "center"};
  justify-content: ${({ justifyContent }) => justifyContent || "center"};
  margin: ${({ margin }) => margin || "0"};
  padding: ${({ padding }) => padding || "0"};
  max-width: ${({ maxWidth }) => maxWidth || "100%"};
`;

export const Column = ({
  alignItems,
  children,
  justifyContent,
  margin,
  padding,
  maxWidth
}) => {
  return (
    <StyledColumn
      margin={margin}
      padding={padding}
      alignItems={alignItems}
      justifyContent={justifyContent}
      maxWidth={maxWidth}
    >
      {children}
    </StyledColumn>
  );
};

Column.propTypes = {
  alignItems: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
  justifyContent: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  maxWidth: PropTypes.string
};
