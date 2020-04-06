import styled from "styled-components";
import StyledSystem, { compose, space, layout, flexbox, color } from "styled-system";

export interface BoxProps
  extends StyledSystem.SpaceProps,
    StyledSystem.LayoutProps,
    StyledSystem.FlexboxProps,
    StyledSystem.ColorProps {
  as?: React.ElementType;
}

const Box = styled.div<BoxProps>`
  box-sizing: border-box;
  ${compose(space, layout, flexbox, color)}
`;

export default Box;
