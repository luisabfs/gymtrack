import styled from 'styled-components/native';
import { Divider, Chip } from 'react-native-paper';

export const Container = styled.ScrollView`
  padding: 0 20px;
  background-color: ${(props) => props.theme.colors.background};
`;

export const Row = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
`;

export const CustomDivider = styled(Divider)`
  flex: 1;
  height: 2px;
  margin-left: 10px;
  background-color: ${({ theme }) => theme.colors.fonts.primary};
`;

export const MuscleGroupTag = styled(Chip)`
  border-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 20px;
  background-color: transparent;
  margin-right: 5px;
  margin-bottom: 5px;
  height: 35px;
`;
