import React, { useState, useContext, useEffect } from 'react';
import { RegisterWorkoutRecordContext } from '../../context/RegisterWorkoutRecord';
import { Container, CheckboxItem } from './styles';

interface Props {
  row?: boolean;
}

const WeekdayCheckbox: React.FC<Props> = ({ row }) => {
  const { state, dispatch } = useContext(RegisterWorkoutRecordContext);
  const [checked, setChecked] = useState<string[]>(
    (row && state.currentWorkout
      ? state.currentWorkout?.workoutWeekdays
      : state.weekdays) || []
  );

  const weekDays = [
    'segunda',
    'terça',
    'quarta',
    'quinta',
    'sexta',
    'sábado',
    'domingo'
  ];

  useEffect(() => {
    row && state.currentWorkout?.id
      ? dispatch({
          type: 'SET_WORKOUT_WEEKDAYS',
          payload: { weekdays: checked, workoutId: state.currentWorkout.id }
        })
      : dispatch({
          type: 'SET_WEEKDAYS',
          payload: { weekdays: checked }
        });
  }, [checked, row, dispatch, state.currentWorkout?.id]);

  const disableItem = (day: string): boolean =>
    !!state.workouts
      .find((workout) => workout.id !== state.currentWorkout?.id)
      ?.workoutWeekdays?.find((weekday) => weekday === day);

  return (
    <Container row={row}>
      {weekDays.map((day) =>
        (row && state.weekdays.find((weekday) => weekday === day)) || !row ? (
          <CheckboxItem
            key={day}
            label={
              row && state.weekdays.length < 6 && state.weekdays.length > 4
                ? day.slice(0, 3)
                : day
            }
            position="leading"
            mode="android"
            status={
              checked.find((check) => check === day) ? 'checked' : 'unchecked'
            }
            onPress={() => {
              checked.find((check) => check === day)
                ? setChecked(checked.filter((value) => value !== day))
                : setChecked([...checked, day]);
            }}
            disabled={disableItem(day)}
          />
        ) : null
      )}
    </Container>
  );
};

export default WeekdayCheckbox;
