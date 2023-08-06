import React, { useState, useContext } from 'react';
import { View } from 'react-native';
import { useTheme } from 'styled-components/native';
import { Font, Input, Accordion } from '../../components';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { RegisterWorkoutRecordNavigationProp } from '../../types/navigation.d';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RegisterWorkoutRecordContext } from '../../context/RegisterWorkoutRecord';

import { Container, ProgressBar } from './styles';

const RegisterRecordInfo: React.FC = () => {
  const theme = useTheme();
  const navigation = useNavigation<RegisterWorkoutRecordNavigationProp>();
  const { setWorkoutRecord, workoutRecord } = useContext(
    RegisterWorkoutRecordContext
  );

  const [recordNameInput, setRecordNameInput] = useState('');
  const [recordGoalInput, setRecordGoalInput] = useState('');

  const validateInputs = (): boolean => {
    return (
      !!recordNameInput && !!recordGoalInput && !!workoutRecord.weekdays.length
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <Container>
        <View style={{ flex: 1 }}>
          <View
            style={{
              flexDirection: 'row',
              width: '100%'
            }}>
            <ProgressBar active />
            <ProgressBar />
            <ProgressBar />
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
              marginBottom: 10
            }}>
            <View style={{ justifyContent: 'flex-end' }}>
              <Font size={18} type="bold">
                ficha de treino atual:
              </Font>
            </View>
            <View>
              <Font size={11} type="light">
                passo
              </Font>
              <Font size={18} type="bold">
                1/3
              </Font>
            </View>
          </View>
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

          <Accordion leftIcon="dumbbell" label="dias de treino" />
        </View>

        <View>
          <Button
            style={{ borderRadius: 4, marginBottom: 5 }}
            mode="contained"
            buttonColor={theme.colors.accent}
            theme={{ colors: { surfaceDisabled: theme.colors.disabled2 } }}
            disabled={!validateInputs()}
            onPress={() => {
              setWorkoutRecord({
                ...workoutRecord,
                name: recordNameInput,
                goal: recordGoalInput
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
