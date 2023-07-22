import React, { useState } from 'react';
import { View } from 'react-native';
import { useTheme } from 'styled-components/native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Font } from '../';
import { Container, Wrapper, CustomInput, NumberPickerButton } from './styles';

interface Props {
  label?: string;
  icon?: React.ComponentProps<typeof Icon>['name'];
  placeholder?: string;
  rounded?: boolean;
  numberPicker?: boolean;
  onChangeText?: (text: string) => void;
  value?: string;
}

const Input: React.FC<Props> = ({
  label,
  icon,
  placeholder,
  rounded,
  numberPicker = false,
  onChangeText,
  value,
  ...props
}) => {
  const { colors } = useTheme();
  const [pickerValue, setPickerValue] = useState(1);

  return (
    <Container>
      {label ? <Font type="semibold">{label}</Font> : null}
      <Wrapper rounded={rounded}>
        {icon ? <Icon size={24} name={icon} color={colors.secondary} /> : null}
        {numberPicker ? (
          <>
            <CustomInput
              keyboardType="numeric"
              editable={false}
              placeholderTextColor={colors.secondary}
              placeholder={placeholder || 'digite aqui'}
              icon={icon}
              value={pickerValue.toString()}
              {...props}
            />
            <View>
              <NumberPickerButton
                disabled={pickerValue >= 10}
                onPress={() =>
                  setPickerValue(
                    pickerValue < 10 ? pickerValue + 1 : pickerValue
                  )
                }>
                <Icon
                  size={30}
                  name={'menu-up'}
                  color={pickerValue < 10 ? colors.secondary : colors.disabled2}
                />
              </NumberPickerButton>
              <NumberPickerButton
                disabled={pickerValue <= 1}
                onPress={() =>
                  setPickerValue(
                    pickerValue > 1 ? pickerValue - 1 : pickerValue
                  )
                }>
                <Icon
                  size={30}
                  name={'menu-down'}
                  style={{
                    marginTop: -7
                  }}
                  disabled
                  color={pickerValue > 1 ? colors.secondary : colors.disabled2}
                />
              </NumberPickerButton>
            </View>
          </>
        ) : (
          <CustomInput
            placeholderTextColor={colors.secondary}
            placeholder={placeholder || 'digite aqui'}
            icon={icon}
            onChangeText={onChangeText}
            value={value}
            {...props}
          />
        )}
      </Wrapper>
    </Container>
  );
};

export default Input;
