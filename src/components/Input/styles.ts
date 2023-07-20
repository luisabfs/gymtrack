import styled from 'styled-components/native';

interface Props {
  rounded?: boolean;
  icon?: string;
}

export const Container = styled.View`
  margin: 5px 0;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  padding-left: 10px;
  margin-top: 5px;
  align-items: center;
  border-radius: ${({ rounded }: Props) => (rounded ? 10 : 0)}px;
  border: ${({ theme }) => `1px solid ${theme.colors.secondary}`};
`;

export const CustomInput = styled.TextInput`
  flex: 1;
  height: 45px;
  padding-left: ${({ icon }: Props) => (icon ? 10 : 0)}px;
  color: ${({ theme }) => theme.colors.fonts.primary};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
