import React, { useState } from 'react';
import { View } from 'react-native';
import { Font } from '..';
import { List, Checkbox } from 'react-native-paper';
import { useTheme } from 'styled-components/native';

import { Container, CustomAccordeon, CustomAccordionItem } from './styles';

interface Props {
  label?: string;
  rowWeekDays?: boolean;
  leftIcon?: string;
  children?: React.ReactElement[];
}

const Accordion: React.FC<Props> = ({
  label,
  leftIcon = 'pencil',
  rowWeekDays,
  children
}) => {
  const theme = useTheme();

  const [expanded, setExpanded] = useState(true);
  const [checked, setChecked] = useState(false);

  const weekDays = [
    'segunda',
    'terça',
    'quarta',
    'quinta',
    'sexta',
    'sábado',
    'domingo'
  ];

  return (
    <Container>
      {label ? <Font type="semibold">{label}</Font> : null}
      <CustomAccordeon
        title={'"seg, ter, qua, quin"'}
        left={(props) => (
          <List.Icon
            {...props}
            icon={leftIcon}
            color={theme.colors.secondary}
          />
        )}
        expanded={expanded}
        onPress={() => setExpanded(!expanded)}>
        <>
          <View
            style={{
              backgroundColor: theme.colors.darker,
              padding: 10,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: theme.colors.background,
              elevation: 10,
              shadowColor: 'black',
              shadowRadius: 5,
              shadowOpacity: 0.3
            }}>
            <View
              style={
                rowWeekDays
                  ? {
                      flexDirection: 'row',
                      flexWrap: 'wrap',
                      justifyContent: 'space-evenly',
                      marginBottom: 10
                    }
                  : null
              }>
              {weekDays.map((day) => (
                <CustomAccordionItem key={day}>
                  <Checkbox.Item
                    label={day}
                    position="leading"
                    uncheckedColor={theme.colors.accent}
                    style={{
                      paddingBottom: 0,
                      paddingTop: 0,
                      paddingRight: 0,
                      paddingLeft: 0,
                      marginLeft: 0,
                      marginRight: 0
                    }}
                    labelStyle={
                      rowWeekDays
                        ? {
                            color: theme.colors.fonts.primary,
                            fontFamily: theme.fonts.regular,
                            fontSize: 14,
                            textAlign: 'left'
                          }
                        : {
                            color: theme.colors.fonts.primary,
                            fontFamily: theme.fonts.regular,
                            fontSize: 14,
                            textAlign: 'left',
                            paddingBottom: 0,
                            paddingTop: 0,
                            paddingRight: 0,
                            paddingLeft: 0,
                            marginLeft: 0,
                            marginRight: 0
                          }
                    }
                    mode="android"
                    status={checked ? 'checked' : 'unchecked'}
                    onPress={() => setChecked(!checked)}
                    color={theme.colors.accent}
                  />
                </CustomAccordionItem>
              ))}
            </View>
            {children ? children : null}
          </View>
        </>
      </CustomAccordeon>
    </Container>
  );
};

export default Accordion;
