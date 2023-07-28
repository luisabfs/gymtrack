import React, { useState } from 'react';

import { Container, CheckboxItem } from './styles';

interface Props {
  row?: boolean;
}

const WeekdayCheckbox: React.FC<Props> = ({ row }) => {
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
          onPress={() =>
            checked.find((check) => check === day)
              ? setChecked(checked.filter((value) => value !== day))
              : setChecked([...checked, day])
          }
        />
      ))}
    </Container>
  );
};

export default WeekdayCheckbox;
