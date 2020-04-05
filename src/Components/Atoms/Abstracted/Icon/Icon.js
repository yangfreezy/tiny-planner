import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledIcon = styled.img`
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};
  margin: ${({ margin }) => margin || "10px 10px 10px 10px"};
`;
export const Icon = ({ src, width, height }) => {
  return <StyledIcon src={src} width={width} height={height} />;
};

Icon.propTypes = {
  src: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
};
