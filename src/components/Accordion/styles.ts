import styled, { DefaultTheme } from 'styled-components/native';
import { List } from 'react-native-paper';

interface Props {
  placeholder?: boolean;
  theme: DefaultTheme;
}

export const Container = styled.View`
  margin: 5px 0;
`;

export const CustomAccordeon = styled(List.Accordion).attrs(
  ({ theme, placeholder }: Props) => ({
    titleStyle: {
      color: placeholder
        ? theme.colors.fonts.secondary
        : theme.colors.fonts.primary,
      fontSize: 14
    },
    theme
  })
)`
  background-color: ${({ theme }: Props) => theme.colors.background};
  border-radius: 10px;
  padding: 2px 10px;
  font-size: 14px;
  margin-top: 5px;
  /* display: none; */
  border: ${({ theme }) => `1px solid ${theme.colors.secondary}`};
`;
