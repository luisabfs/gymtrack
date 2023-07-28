import React, { useState, useContext } from 'react';
import { View } from 'react-native';
import { Font, WeekdayCheckbox } from '..';
import { List } from 'react-native-paper';
import { useTheme } from 'styled-components/native';
import { RegisterWorkoutRecordContext } from '../../context/RegisterWorkoutRecord';

import { Container, CustomAccordeon } from './styles';

interface Props {
  label?: string;
  rowWeekDays?: boolean;
  leftIcon?: string;
  expandedFirst?: boolean;
  children?: React.ReactElement[];
}

const Accordion: React.FC<Props> = ({
  label,
  leftIcon = 'pencil',
  rowWeekDays,
  children,
  expandedFirst = false
}) => {
  const theme = useTheme();
  const { weekdayCheckbox } = useContext(RegisterWorkoutRecordContext);
  const [expanded, setExpanded] = useState(expandedFirst);

  const splited = weekdayCheckbox.toString().split(',');
  const treated = splited.map((string) => string.slice(0, 3));
  const formatted = treated.join(', ');

  return (
    <Container>
      {label ? <Font type="semibold">{label}</Font> : null}
      <CustomAccordeon
        placeholder={!weekdayCheckbox.length}
        title={weekdayCheckbox.length ? formatted : '"seg, ter, qua, quin"'}
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
