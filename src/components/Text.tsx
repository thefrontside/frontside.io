import styled from "styled-components";
import StyledSystem, { compose, color, typography } from "styled-system";

export interface TextProps
  extends StyledSystem.ColorProps,
    StyledSystem.TypographyProps {
  as?: React.ElementType;
}

export const Text = styled.p<TextProps>`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  margin-bottom: ${({ theme }) => theme.space.medium};
  ${compose(color, typography)}
`;

export const Strong = styled.strong<TextProps>`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  ${compose(color, typography)}
`;

export const Emphasis = styled.em<TextProps>`
  font-style: italic;
  ${compose(color, typography)}
`;

export default Text;
