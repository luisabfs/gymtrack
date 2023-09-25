import React from 'react';
import { Font } from '..';
import { useTheme } from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Container } from './styles';

interface Props {
  key: React.Key;
  label: string;
  onClose: () => void;
}

const Tag: React.FC<Props> = ({ key, label, onClose }) => {
  const theme = useTheme();

  return (
    <Container
      key={key}
      mode="outlined"
      compact
      closeIcon={() => (
        <Icon size={18} name={'close'} color={theme.colors.secondary} />
      )}
      onClose={() => onClose()}>
      <Font size={12} type="light">
        {label}
      </Font>
    </Container>
  );
};

export default Tag;
