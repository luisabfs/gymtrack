import React, { useState, useContext } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Font, WeekdayCheckbox, Input } from '..';
import { List } from 'react-native-paper';
import { useTheme } from 'styled-components/native';
import { RegisterWorkoutRecordContext } from '../../context/RegisterWorkoutRecord';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Container, CustomAccordeon } from './styles';

interface Props {
  label?: string;
  rowWeekDays?: boolean;
  leftIcon?: string;
  expandedFirst?: boolean;
  hasInput?: boolean;
  workout?: object;
  inputValue?: string;
  inputOnChangeText?: (text: string) => void;
  children?: React.ReactElement[];
}

const Accordion: React.FC<Props> = ({
  label,
  leftIcon = 'pencil',
  rowWeekDays,
  children,
  expandedFirst = false,
  hasInput = false,
  inputValue,
  inputOnChangeText,
  workout
}) => {
  const theme = useTheme();
  const { workoutRecord } = useContext(RegisterWorkoutRecordContext);
  const [expanded, setExpanded] = useState(expandedFirst);

  const splited = workoutRecord.weekdays?.toString().split(',');
  const treated = splited?.map((string) => string.slice(0, 3));
  const formatted = treated?.join(', ');

  return (
    <Container>
      {label ? <Font type="semibold">{label}</Font> : null}
      {hasInput && inputOnChangeText ? (
        !workout ? (
          <Input
            rounded
            placeholder='"Treino A"'
            leftIcon="pencil"
            rightIcon="chevron-up"
            rightIconAction={() => setExpanded(!expanded)}
            value={inputValue}
            onChangeText={(text) => inputOnChangeText(text)}
          />
        ) : (
          <TouchableOpacity
            style={{
              backgroundColor: theme.colors.card,
              padding: 15,
              paddingRight: 5,
              borderRadius: 4,
              elevation: 10,
              shadowColor: 'black',
              shadowRadius: 5,
              shadowOpacity: 0.3,
              shadowOffset: {
                width: 1,
                height: 4
              }
            }}
            onPress={() => setExpanded(!expanded)}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                <Font type="bold">{workout.name}</Font>
                <Font type="light">
                  {workout.exercises.length} exercício
                  {workout.exercises.length > 1 ? 's' : ''}
                </Font>
              </View>
              {/* TODO: add muscleGroups labels */}
              <Icon
                size={24}
                name="chevron-down"
                color={theme.colors.secondary}
                style={{ padding: 10 }}
              />
            </View>
          </TouchableOpacity>
        )
      ) : null}
      <CustomAccordeon
        row={rowWeekDays}
        hasInput={hasInput}
        placeholder={!workoutRecord.weekdays?.length}
        title={
          workoutRecord.weekdays?.length ? formatted : '"seg, ter, qua, quin"'
        }
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
