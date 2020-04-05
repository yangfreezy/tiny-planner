import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledPageBody = styled.div`
  min-height: 100vh;
  padding-bottom: 50px;
`;

export const PageBody = ({ children }) => {
  return <StyledPageBody>{children}</StyledPageBody>;
};

PageBody.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element])
};
