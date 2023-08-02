import styled from 'styled-components/native';

interface Props {
  rounded?: boolean;
  leftIcon?: string;
  rightIconAction?: () => void;
}

export const Container = styled.View`
  margin: ${({ rightIconAction }: Props) => (rightIconAction ? 0 : '5px 0')};
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
  padding-left: ${({ leftIcon }: Props) => (leftIcon ? 10 : 0)}px;
  color: ${({ theme }) => theme.colors.fonts.primary};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const NumberPickerButton = styled.TouchableOpacity`
  flex: 1;
  width: 35px;
  height: 30px;
  overflow: hidden;
`;
