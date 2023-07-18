import React from 'react';
import { useTheme } from 'styled-components/native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Font } from '../';
import { Container, Wrapper, CustomInput } from './styles';

interface Props {
  label: string;
  icon?: React.ComponentProps<typeof Icon>['name'];
  placeholder?: string;
}

const Input: React.FC<Props> = ({ label, icon, placeholder }) => {
  const { colors } = useTheme();
  return (
    <Container>
      <Font type="semibold">{label}</Font>
      <Wrapper>
        <Icon size={24} name={icon || 'pencil'} color={colors.secondary} />
        <CustomInput
          placeholderTextColor={colors.secondary}
          placeholder={placeholder || 'digite aqui'}
        />
      </Wrapper>
    </Container>
  );
};

export default Input;
