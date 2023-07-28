import styled from 'styled-components/native';
import { List } from 'react-native-paper';

export const Container = styled.View`
  margin: 5px 0;
`;

export const CustomAccordeon = styled(List.Accordion).attrs(
  ({ theme, placeholder }) => ({
    titleStyle: {
      color: placeholder
        ? theme.colors.fonts.secondary
        : theme.colors.fonts.primary,
      fontSize: 14
    },
    theme
  })
)`
  background-color: #333;
  border-radius: 10px;
  padding: 2px 10px;
  font-size: 14px;
  margin-top: 5px;
  color: orange;
  /* display: none; */
  border: ${({ theme }) => `1px solid ${theme.colors.secondary}`};
`;
