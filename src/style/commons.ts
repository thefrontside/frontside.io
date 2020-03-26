import * as CSS from 'csstype';

export interface LineHeights {
  body: CSS.LineHeightProperty<number>;
  heading: CSS.LineHeightProperty<number>;
}

export interface FontWeights {
  light: CSS.FontWeightAbsolute;
  body: CSS.FontWeightAbsolute;
  bold: CSS.FontWeightAbsolute;
}

export interface Fonts {
  body: string;
  heading: string;
  monospace: string;
}

export interface Commons {
  absoluteSize: string;
  breakpoints: string[];
  fonts: Fonts;
  fontSizes: string[];
  fontWeights: FontWeights;
  lineHeights: LineHeights;
  space: string[];
  sizes: number[];
}

export const frontsideCommons: Commons = {
  absoluteSize: '20px',
  breakpoints: [600, 768, 1280, 1500].map(n => n + 'px'),
  fonts: {
    body: '"Fright Text Pro", freight-text-pro, serif',
    heading: '"Proxima Nova", proxima-nova, sans-serif',
    monospace: 'monospace',
  },
  fontSizes: [0.625, 0.75, 0.875, 1, 1.21, 1.63, 2.06, 2.62].map(n => n + 'rem'),
  fontWeights: {
    light: 300,
    body: 400,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  space: [0, 0.3819, 0.6118, 1, 1.6103, 2.618, 4.236, 6.8541].map(n => n + 'rem'),
  sizes: [1280]
};

const breakpointAliases: string[] = ['small', 'medium', 'large', 'xLarge'];

const spaceAliases: string[] = ['xxSmall', 'xSmall', 'small', 'medium', 'large', 'xLarge', 'xxLarge', 'xxxLarge'];

const sizeAliases: string[] = ['section'];

frontsideCommons.fontSizes.forEach((_, index: number): void => {
  frontsideCommons.fontSizes[spaceAliases[index]] = frontsideCommons.fontSizes[index];
});

frontsideCommons.space.forEach((_, index: number): void => {
  frontsideCommons.space[spaceAliases[index]] = frontsideCommons.space[index];
});

frontsideCommons.breakpoints.forEach((_, index: number): void => {
  frontsideCommons.breakpoints[breakpointAliases[index]] = frontsideCommons.breakpoints[index];
});

frontsideCommons.sizes.forEach((_, index: number): void => {
  frontsideCommons.sizes[sizeAliases[index]] = frontsideCommons.sizes[index];
});
