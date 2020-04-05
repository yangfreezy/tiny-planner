import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledPageContainer = styled.div`
  width: 100%;
`;

export const PageContainer = ({ children }) => {
  return <StyledPageContainer>{children}</StyledPageContainer>;
};

PageContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element])
};
