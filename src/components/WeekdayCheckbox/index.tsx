import React, { useState, useContext, useEffect } from 'react';
import { RegisterWorkoutRecordContext } from '../../context/RegisterWorkoutRecord';
import { Container, CheckboxItem } from './styles';

interface Props {
  row?: boolean;
}

const WeekdayCheckbox: React.FC<Props> = ({ row }) => {
  const { workoutRecord, setWorkoutRecord } = useContext(
    RegisterWorkoutRecordContext
  );
  const [checked, setChecked] = useState<string[]>(
    (!row && workoutRecord.weekdays) || []
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
    row
      ? setWorkoutRecord({
          ...workoutRecord,
          workouts: {
            workoutWeekdays: checked
          }
        })
      : setWorkoutRecord({ ...workoutRecord, weekdays: checked });
  }, [checked, row, setWorkoutRecord]);

  return (
    <Container row={row}>
      {weekDays.map((day) =>
        (row && workoutRecord.weekdays.find((weekday) => weekday === day)) ||
        !row ? (
          <CheckboxItem
            key={day}
            label={
              row &&
              workoutRecord.weekdays.length < 6 &&
              workoutRecord.weekdays.length > 4
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
          />
        ) : null
      )}
    </Container>
  );
};

export default WeekdayCheckbox;
