import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import Section from "./Section";
import frontsideLogo from "../img/full-logo.svg";

const Logo = styled(Link)`
  background: url(${frontsideLogo});
  background-repeat: no-repeat;
  background-size: contain;
  display: block;
  height: ${({ theme }) => theme.space.large};
  width: ${({ theme }) => theme.space.xxxLarge};
  text-indent: -10000px;
`;

const Nav = styled.nav`
  margin-left: auto;
`;

const NavLink = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.small};
  margin-left: ${({ theme }) => theme.space.large};
  color: ${({ theme }) => theme.colors.primary};
  padding-bottom: ${({ theme }) => theme.space.xSmall};
  &[aria-current] {
    border-bottom: 2px solid ${({ theme }) => theme.colors.contrast};
  }
`;

const Navbar: React.FC = () => (
  <Section as="header">
    <Logo to="/">Frontside</Logo>
    <Nav>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/services">Services</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </Nav>
  </Section>
);

export default Navbar;
