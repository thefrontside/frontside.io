
import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
`;

export const ListItem = styled.li`
  padding-left: ${({ theme }) => theme.space.medium};
  margin-bottom: ${({ theme }) => theme.space.small};
  position: relative;
  &:before {
    content: '–';
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.primary};
    margin-right: ${({ theme }) => theme.space.small};
    position: absolute;
    left: 0;
  }
`;
