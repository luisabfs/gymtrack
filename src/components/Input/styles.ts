import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 5px 0;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  padding-left: 10px;
  margin-top: 5px;
  align-items: center;
  border-radius: 10px;
  border: ${({ theme }) => `1px solid ${theme.colors.secondary}`};
`;

export const CustomInput = styled.TextInput`
  flex: 1;
  height: 45px;
  padding-left: 10px;
  color: ${({ theme }) => theme.colors.fonts.primary};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
