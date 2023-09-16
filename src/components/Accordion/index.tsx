import React, { useContext } from 'react';
import { View } from 'react-native';
import { useTheme } from 'styled-components/native';
import { Font, WeekdayCheckbox, Input } from '..';
import { List } from 'react-native-paper';
import { RegisterWorkoutRecordContext } from '../../context/RegisterWorkoutRecord';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Workout } from '../../hooks/RegisterWorkoutRecord';
import { formatWeekdayArrayToString } from '../../utils';
import {
  Container,
  CustomAccordeon,
  ClosedAccordion,
  AccordionContentContainer
} from './styles';

interface Props {
  label?: string;
  rowWeekDays?: boolean;
  leftIcon?: string;
  expandedFirst?: boolean;
  hasInput?: boolean;
  workout?: Workout;
  inputValue?: string;
  inputOnChangeText?: (text: string) => void;
  children?: React.ReactElement[];
  expanded: boolean;
  setExpanded: React.Dispatch<
    React.SetStateAction<number | boolean | undefined>
  >;
}

const Accordion: React.FC<Props> = ({
  label,
  leftIcon = 'pencil',
  rowWeekDays,
  children,
  hasInput = false,
  inputValue,
  inputOnChangeText,
  workout,
  expanded,
  setExpanded
}) => {
  const theme = useTheme();
  const { state, dispatch } = useContext(RegisterWorkoutRecordContext);
  const isWorkoutFinished = workout && workout.status === 'FINISHED';

  const handleCurrentWorkout = (workout?: Workout) => {
    setExpanded((previousValue) => (previousValue ? undefined : workout?.id));

    dispatch({
      type: 'SET_CURRENT_WORKOUT',
      payload: expanded ? { id: undefined } : { id: workout?.id }
    });
  };

  return (
    <Container>
      {label ? <Font type="semibold">{label}</Font> : null}
      {hasInput && inputOnChangeText ? (
        isWorkoutFinished ? (
          <ClosedAccordion onPress={() => handleCurrentWorkout(workout)}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                <Font type="bold">{workout.name || ''}</Font>
                <Font type="light">
                  {`${workout.exercises?.length}`} exercício
                  {workout.exercises && workout.exercises.length > 1 ? 's' : ''}
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
          </ClosedAccordion>
        ) : (
          <Input
            rounded
            placeholder='"Treino A"'
            leftIcon="pencil"
            rightIcon="chevron-up"
            rightIconAction={() => handleCurrentWorkout(workout)}
            value={workout?.name ?? inputValue}
            onChangeText={(text) => inputOnChangeText(text)}
          />
        )
      ) : null}
      <CustomAccordeon
        hasInput={hasInput}
        placeholder={!state.weekdays?.length}
        title={
          state.weekdays?.length
            ? formatWeekdayArrayToString(state.weekdays)
            : '"seg, ter, qua, quin"'
        }
        left={(props) => (
          <List.Icon
            {...props}
            icon={leftIcon}
            color={theme.colors.secondary}
          />
        )}
        expanded={expanded}
        onPress={() => setExpanded((prev) => !prev)}>
        <>
          <AccordionContentContainer>
            <WeekdayCheckbox row={rowWeekDays} />
            {children ? <View style={{ padding: 10 }}>{children}</View> : null}
          </AccordionContentContainer>
        </>
      </CustomAccordeon>
    </Container>
  );
};

export default Accordion;
