import React from 'react';
import { ThemeProvider as StyledThemeProvider, createGlobalStyle } from 'styled-components';
import reset from 'styled-reset-advanced';
import { LightTheme, Theme } from './themes';

const getBrowserTheme = (): Theme => {
  // const mql = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)')) || undefined;
  // return mql && mql.matches ? 'dark' : 'light';
  return LightTheme;
};

const GlobalTheme = createGlobalStyle`
  ${reset};

  html, body {
    font-size: ${({ theme }) => theme.absoluteSize};
    background: ${({ theme }) => theme.colors.background};
    font-family: ${({ theme }) => theme.fonts.body};
    line-height: ${({ theme }) => theme.lineHeights.body};
  }
`;

export const ThemeProvider: React.FC = ({ children }) => (
  <StyledThemeProvider theme={getBrowserTheme()}>
    <GlobalTheme />
    {children}
  </StyledThemeProvider>
);
