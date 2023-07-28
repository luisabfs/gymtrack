import styled, { DefaultTheme } from 'styled-components/native';
import { List } from 'react-native-paper';

interface Props {
  active?: boolean;
  theme: DefaultTheme;
}

export const Container = styled.View`
  flex: 1;
  padding: 0 20px;
  background-color: ${(props) => props.theme.colors.background};
`;

export const ProgressBar = styled.View`
  flex: 1;
  height: 2px;
  background-color: ${({ theme, active }: Props) =>
    active ? theme.colors.accent : theme.colors.disabled};
  margin: 20px 5px;
`;

export const CustomAccordeon = styled(List.Accordion).attrs(({ theme }) => ({
  titleStyle: {
    color: theme.colors.fonts.secondary,
    fontSize: 14
  },
  theme
}))`
  background-color: #333;
  border-radius: 10px;
  padding: 2px 10px;
  font-size: 14px;
  margin: 5px 0;
  color: orange;
  border: ${({ theme }) => `1px solid ${theme.colors.secondary}`};
`;

export const CustomAccordionItem = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
