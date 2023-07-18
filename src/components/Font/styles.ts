import styled, { DefaultTheme } from 'styled-components/native';

interface Props {
  size?: number;
  color?: string;
  type: 'regular' | 'light' | 'semibold' | 'bold';
  theme: DefaultTheme;
}
export const CustomFont = styled.Text`
  font-family: ${({ theme, type }: Props) => theme.fonts[type]};
  color: ${({ theme, color }: Props) => color || theme.colors.fonts.primary};
  font-size: ${({ size }: Props) => size || 14}px;
`;
