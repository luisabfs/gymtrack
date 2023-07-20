import React, { useState } from 'react';

import { Container, CheckboxItem } from './styles';

interface Props {
  row?: boolean;
}

const WeekdayCheckbox: React.FC<Props> = ({ row }) => {
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
    <Container row={row}>
      {weekDays.map((day) => (
        <CheckboxItem
          key={day}
          label={day}
          position="leading"
          mode="android"
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => setChecked(!checked)}
        />
      ))}
    </Container>
  );
};

export default WeekdayCheckbox;
