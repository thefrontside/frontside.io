import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import logo from "../img/logo-no-text.svg";

const FooterWrapper = styled.footer`
  display: flex;
  flex-flow: column;
  font-size: ${({ theme }) => theme.fontSizes.small};
  line-height: ${({ theme }) => theme.lineHeights.heading};
  text-align: center;
  margin-top: ${({ theme }) => theme.space.xLarge};
  color: ${({ theme }) => theme.colors.bodyCopy};
`;

const Nav = styled.nav`
  margin: ${({ theme }) => theme.space.large} 0;
`;

const NavLink = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.small};
  margin: 0 ${({ theme }) => theme.space.medium};
  color: ${({ theme }) => theme.colors.primary};
  &[aria-current] {
    color: ${({ theme }) => theme.colors.contrast};
  }
`;

const Copyright = styled.p`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  font-size: ${({ theme }) => theme.fontSizes.xSmall};
  margin: ${({ theme }) => theme.space.large} 0;
  text-transform: uppercase;
`;

export default function Footer() {
  let year = new Date().getFullYear();

  return (
    <FooterWrapper>
      <Link to="/">
        <img src={logo} alt="Frontside" />
      </Link>

      <Nav>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/podcast">Podcast</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </Nav>

      <address className="vcard footer-address">
        <div className="adr">
          <div className="street-address">2700 W Anderson Ln</div>
          <div className="street-address">Suite 205-107</div>
          <span className="locality">Austin</span>,&nbsp;
          <span className="region">Texas</span>&nbsp;
          <span className="postal-code">78757</span>
        </div>
        <a className="tel" href="tel:18004934589">
          &#43;1 (800) 493-4589
        </a>
      </address>

      <Copyright>
        {`\u00A9 2005-${year} The Frontside Software, Inc. All rights reserved.`}
      </Copyright>
    </FooterWrapper>
  );
}
