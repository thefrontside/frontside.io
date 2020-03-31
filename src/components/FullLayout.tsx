import styled from 'styled-components';
import StyledSystem, { color } from 'styled-system';
import { Theme } from '../style/themes';


export const FullRow = styled.section`
  display: flex;
  flex-flow: column nowrap;
  max-width: 100vw;
  overflow-x: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    flex-flow: row nowrap;
  }
`;

interface ColumnProps extends StyledSystem.ColorProps {
  as?: React.ElementType;
  largeWidth: number;
  columnOrder?: number;
}

const sidePaddingToCenter = (theme: Theme) => {
  return `((100vw - ${theme.sizes['section']}px)/2) + ${theme.space['large']}`;
};

const columnWidth = (theme: Theme, columnSize: number, isEdge: boolean) => {
  let contentWidth = `${theme.sizes['section'] * columnSize}px`;
  let boxWidth = `${contentWidth}`;

  if (isEdge) {
    return `${boxWidth} + (100vw - ${theme.sizes['section']}px)/2`;
  } else {
    return `${boxWidth}`;
  }
};

export const FullColumn = styled.div<ColumnProps>`
  width: 100%;
  box-sizing: border-box;
  flex-shrink: 0;
  padding: ${({ theme }) => theme.space.large} ${({ theme }) => theme.space.medium};

  ${color}

  ${({ columnOrder }) => (columnOrder) ? `order: ${columnOrder};` : ''}

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    width: calc(${({ theme, largeWidth }) => columnWidth(theme, largeWidth, false)});
    order: inherit;
    
    &:first-child {
      width: calc(${({ theme, largeWidth }) => columnWidth(theme, largeWidth, true)});
      padding-left: calc(${({ theme }) => sidePaddingToCenter(theme)});
      padding-right: ${({ theme }) => theme.space.large};
    }
    &:last-child {
      width: calc(${({ theme, largeWidth }) => columnWidth(theme, largeWidth, true)});
      padding-right: calc(${({ theme }) => sidePaddingToCenter(theme)});
      padding-left: ${({ theme }) => theme.space.large};
    }
  }
`;
