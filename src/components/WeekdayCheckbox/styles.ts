import styled, { css } from 'styled-components/native';
import { Checkbox } from 'react-native-paper';

interface Props {
  row?: boolean;
}

const rowContainer = css`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const Container = styled.View`
  ${({ row }: Props) => (row ? rowContainer : null)}
`;

export const CheckboxItem = styled(Checkbox.Item).attrs(({ theme }) => ({
  uncheckedColor: theme.colors.accent,
  labelStyle: {
    color: theme.colors.fonts.primary,
    fontFamily: theme.fonts.regular,
    fontSize: 14,
    textAlign: 'left'
  },
  color: theme.colors.accent
}))`
  padding: 0;
`;
