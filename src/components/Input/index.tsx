import React, { useState } from 'react';
import { View } from 'react-native';
import { useTheme } from 'styled-components/native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Font } from '../';
import { Container, Wrapper, CustomInput, NumberPickerButton } from './styles';

interface Props {
  label?: string;
  leftIcon?: React.ComponentProps<typeof Icon>['name'];
  rightIcon?: React.ComponentProps<typeof Icon>['name'];
  rightIconAction?: () => void;
  placeholder?: string;
  rounded?: boolean;
  numberPicker?: boolean;
  onChangeText?: (text: string) => void;
  value?: string;
  capitalize?: 'words' | 'none' | 'sentences' | 'characters';
}

const Input: React.FC<Props> = ({
  label,
  leftIcon,
  rightIcon,
  rightIconAction,
  placeholder,
  rounded,
  numberPicker = false,
  onChangeText,
  value,
  capitalize = 'sentences',
  ...props
}) => {
  const { colors } = useTheme();
  const [pickerValue, setPickerValue] = useState(1);

  return (
    <Container rightIconAction={rightIconAction}>
      {label ? <Font type="semibold">{label}</Font> : null}
      <Wrapper rounded={rounded}>
        {leftIcon ? (
          <Icon size={24} name={leftIcon} color={colors.secondary} />
        ) : null}
        {numberPicker ? (
          <>
            <CustomInput
              keyboardType="numeric"
              editable={false}
              placeholderTextColor={colors.secondary}
              placeholder={placeholder || 'digite aqui'}
              leftIcon={leftIcon}
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
            leftIcon={leftIcon}
            onChangeText={onChangeText}
            value={value}
            autoCapitalize={capitalize}
            {...props}
          />
        )}
        {rightIcon && rightIconAction ? (
          <Icon
            size={24}
            name={rightIcon}
            color={colors.secondary}
            style={{ padding: 10 }}
            onPress={rightIconAction}
          />
        ) : null}
      </Wrapper>
    </Container>
  );
};

export default Input;
