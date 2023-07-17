import styled, { DefaultTheme } from 'styled-components/native';

interface Props {
  size?: number;
  color?: string;
  type?: 'bold' | 'normal' | 'thin';
  theme: DefaultTheme;
}

export const CustomFont = styled.Text`
  font-family: ${({ theme }: Props) => theme.fonts.main};
  color: ${({ theme, color }: Props) => color || theme.colors.fonts.primary};
  font-size: ${({ size }: Props) => size || 14}px;
  font-weight: ${({ type }: Props) =>
    type === 'thin' ? 300 : type || 'normal'};
`;
