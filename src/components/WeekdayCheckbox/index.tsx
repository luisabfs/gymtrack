import React, { useState, useContext, useEffect } from 'react';
import { RegisterWorkoutRecordContext } from '../../context/RegisterWorkoutRecord';
import { Container, CheckboxItem } from './styles';

interface Props {
  row?: boolean;
}

const WeekdayCheckbox: React.FC<Props> = ({ row }) => {
  const { setWeekdayCheckbox } = useContext(RegisterWorkoutRecordContext);
  const [checked, setChecked] = useState<string[]>([]);

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
    setWeekdayCheckbox(checked);
  }, [checked, setWeekdayCheckbox]);

  return (
    <Container row={row}>
      {weekDays.map((day) => (
        <CheckboxItem
          key={day}
          label={day}
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
      ))}
    </Container>
  );
};

export default WeekdayCheckbox;
