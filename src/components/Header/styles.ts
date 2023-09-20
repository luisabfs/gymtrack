import styled, { DefaultTheme } from 'styled-components/native';

interface Props {
  active?: boolean;
  theme: DefaultTheme;
}

export const Row = styled.View`
  width: 100%;
  flex-direction: row;
`;

export const ProgressBar = styled.View`
  flex: 1;
  height: 2px;
  background-color: ${({ theme, active }: Props) =>
    active ? theme.colors.accent : theme.colors.disabled};
  margin: 20px 5px;
`;

export const TitleContainer = styled(Row)`
  justify-content: space-between;
  margin-bottom: 10px;
`;
