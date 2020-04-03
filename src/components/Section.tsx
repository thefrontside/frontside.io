import styled from "styled-components";
import StyledSystem, { space } from "styled-system";

export interface SectionProps extends StyledSystem.SpaceProps {
  as?: React.ElementType;
}

const Section = styled.section<SectionProps>`
  display: flex;
  flex-flow: row wrap;
  margin: 0 auto;
  box-sizing: border-box;
  padding: ${({ theme }) => theme.space.large} ${({ theme }) =>
  theme.space.medium};
  max-width: ${({ theme }) => theme.sizes.section}px;
  ${space}

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    padding-right: ${({ theme }) => theme.space.large};
    padding-left: ${({ theme }) => theme.space.large};
  }
`;

export default Section;
