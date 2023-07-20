import React from 'react';
import { useTheme } from 'styled-components/native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Font } from '../';
import { Container, Wrapper, CustomInput } from './styles';

interface Props {
  label?: string;
  icon?: React.ComponentProps<typeof Icon>['name'];
  placeholder?: string;
  rounded?: boolean;
}

const Input: React.FC<Props> = ({
  label,
  icon,
  placeholder,
  rounded,
  ...props
}) => {
  const { colors } = useTheme();
  return (
    <Container>
      {label ? <Font type="semibold">{label}</Font> : null}
      <Wrapper rounded={rounded}>
        {icon ? <Icon size={24} name={icon} color={colors.secondary} /> : null}
        <CustomInput
          placeholderTextColor={colors.secondary}
          placeholder={placeholder || 'digite aqui'}
          icon={icon}
          {...props}
        />
      </Wrapper>
    </Container>
  );
};

export default Input;
