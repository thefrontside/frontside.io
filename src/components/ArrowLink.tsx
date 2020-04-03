import React from "react";
import styled from "styled-components";
import { Link, GatsbyLinkProps } from "gatsby";

import { LinkArrowIcon } from "./Icons";

const StyledLink = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`;

const ArrowContainer = styled.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  color: ${({ theme }) => theme.colors.contrast};
  margin-left: ${({ theme }) => theme.space.xSmall};
  svg {
    width: 100%;
  }
`;

const ArrowLink: React.FC<GatsbyLinkProps> = ({ children, ...otherProps }) => (
  <StyledLink {...otherProps}>
    {children}
    <ArrowContainer>
      <LinkArrowIcon />
    </ArrowContainer>
  </StyledLink>
);

export default ArrowLink;
