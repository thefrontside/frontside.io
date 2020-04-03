import React from "react";
import styled from "styled-components";
import Section from "./Section";

export const HeroLink = styled.a`
  display: inline-block;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.secondary};
`;

const Hero: React.FC = ({ children }) => (
  <Section
    marginTop={["large", "xLarge", "xxLarge"]}
    marginBottom={["large", "xLarge", "xxLarge"]}
  >
    {children}
  </Section>
);

export default Hero;
