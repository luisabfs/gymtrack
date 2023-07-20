import React, { useState } from 'react';
import { View } from 'react-native';
import { Font, WeekdayCheckbox } from '..';
import { List } from 'react-native-paper';
import { useTheme } from 'styled-components/native';

import { Container, CustomAccordeon } from './styles';

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
            <WeekdayCheckbox row={rowWeekDays} />
            {children ? <View style={{ padding: 10 }}>{children}</View> : null}
          </View>
        </>
      </CustomAccordeon>
    </Container>
  );
};

export default Accordion;
