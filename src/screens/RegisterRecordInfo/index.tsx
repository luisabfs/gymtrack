import React, { useState, useContext } from 'react';
import { View } from 'react-native';
import { useTheme } from 'styled-components/native';
import { Font, Input, Accordion, Header } from '../../components';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { RegisterWorkoutRecordNavigationProp } from '../../types/navigation.d';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RegisterWorkoutRecordContext } from '../../context/RegisterWorkoutRecord';

import { Container } from './styles';

const RegisterRecordInfo: React.FC = () => {
  const theme = useTheme();
  const navigation = useNavigation<RegisterWorkoutRecordNavigationProp>();
  const { state, dispatch } = useContext(RegisterWorkoutRecordContext);

  const [expanded, setExpanded] = useState<number | boolean | undefined>(false);
  const [recordNameInput, setRecordNameInput] = useState('');
  const [recordGoalInput, setRecordGoalInput] = useState('');

  const validateInputs = (): boolean => {
    return !!recordNameInput && !!recordGoalInput && !!state.weekdays.length;
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <Container>
        <View style={{ flex: 1 }}>
          <Header currentStep={1} title="ficha de treino atual:" />

          <Input
            rounded
            leftIcon="pencil"
            label="nome"
            placeholder='"01/2023"'
            onChangeText={(text) => setRecordNameInput(text)}
          />
          <Input
            rounded
            label="objetivo"
            placeholder='"Hipertrofia"'
            leftIcon="bullseye-arrow"
            onChangeText={(text) => setRecordGoalInput(text)}
          />

          {/* // TODO: add date picker */}
          {/* <Input rounded label="período" icon="calendar" /> */}

          <Accordion
            expanded={!!expanded}
            setExpanded={setExpanded}
            leftIcon="dumbbell"
            label="dias de treino"
          />
        </View>

        <View>
          <Button
            style={{ borderRadius: 4, marginBottom: 5 }}
            mode="contained"
            buttonColor={theme.colors.accent}
            theme={{ colors: { surfaceDisabled: theme.colors.disabled2 } }}
            disabled={!validateInputs()}
            onPress={() => {
              dispatch({
                type: 'SAVE_INFO',
                payload: { name: recordNameInput, goal: recordGoalInput }
              });
              navigation.navigate('RegisterWorkouts');
            }}>
            <Font
              type="semibold"
              color={
                validateInputs()
                  ? theme.colors.fonts.primary
                  : theme.colors.fonts.secondary
              }>
              próximo →
            </Font>
          </Button>
        </View>
      </Container>
    </SafeAreaView>
  );
};

export default RegisterRecordInfo;
