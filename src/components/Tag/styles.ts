import styled from 'styled-components/native';
import { Chip } from 'react-native-paper';

export const Container = styled(Chip)`
  border-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 20px;
  background-color: transparent;
  margin-right: 5px;
  margin-bottom: 5px;
  height: 35px;
`;
