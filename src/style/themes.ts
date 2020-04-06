
import * as CSS from 'csstype';
import { frontsideCommons, Commons } from './commons';

interface BrandColors {
  pink: CSS.ColorProperty;
  skyBlue: CSS.ColorProperty;
  darkBlue: CSS.ColorProperty;
}

const brand: BrandColors = {
  pink: '#f74d7b',
  skyBlue: '#26abe8',
  darkBlue: '#14315d',
};

interface ColorTheme {
  brand: BrandColors;
  background: CSS.ColorProperty;
  bodyCopy: CSS.ColorProperty;
  primary: CSS.ColorProperty;
  secondary: CSS.ColorProperty;
  contrast: CSS.ColorProperty;
  disabled: CSS.ColorProperty;
  footer: CSS.ColorProperty;
  subtleBackground: CSS.ColorProperty;
  overDark: CSS.ColorProperty;
}

export interface Theme extends Commons {
  name: string;
  colors: ColorTheme;
}

const LightTheme: Theme = {
  ...frontsideCommons,
  name: 'light',
  colors: {
    brand,
    background: '#ffffff',
    bodyCopy: '#1a1a1a',
    primary: brand.darkBlue,
    secondary: brand.skyBlue,
    contrast: brand.pink,
    disabled: '#C0C0C0',
    footer: '#E7EAEE',
    subtleBackground: '#f3fdff',
    overDark: '#ffffff',
  },
};

const DarkTheme: Theme = {
  ...frontsideCommons,
  name: 'dark',
  colors: {
    brand,
    background: '#14191e',
    bodyCopy: '#b3b3b3',
    primary: '#ffffff',
    secondary: brand.skyBlue,
    contrast: brand.pink,
    disabled: '#C0C0C0',
    footer: '#E7EAEE',
    subtleBackground: '#171d26',
    overDark: '#ffffff',
  },
};

export { LightTheme, DarkTheme };
