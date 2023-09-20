import React, { useContext } from 'react';
import { View } from 'react-native';
import { useTheme } from 'styled-components/native';
import { RegisterWorkoutRecordContext } from '../../context/RegisterWorkoutRecord';

import { Button, Portal, Modal } from 'react-native-paper';
import { Font, Input } from '../';
import { Row } from './styles';

interface Props {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  exerciseNameInput?: string;
  setExerciseNameInput: React.Dispatch<React.SetStateAction<string>>;
}

// TODO: add input functionalities
const WorkoutModal: React.FC<Props> = ({
  modalVisible,
  setModalVisible,
  exerciseNameInput,
  setExerciseNameInput
}) => {
  const theme = useTheme();
  const { dispatch, state } = useContext(RegisterWorkoutRecordContext);

  return (
    <Portal>
      <Modal
        contentContainerStyle={{
          backgroundColor: theme.colors.darker,
          padding: 20,
          margin: 20,
          marginBottom: 200
        }}
        theme={{ colors: { backdrop: 'rgba(0, 0, 0, 0.6)' } }}
        visible={modalVisible}>
        <Input
          autoFocus
          label="nome do exercício"
          onChangeText={(text) => setExerciseNameInput(text)}
        />
        <Row>
          <View style={{ flex: 1, marginRight: 5 }}>
            <Input numberPicker label="nº de séries" />
          </View>
          <View style={{ flex: 1, marginLeft: 5 }}>
            <Input label="zona alvo de reps" />
          </View>
        </Row>
        <Row>
          <View style={{ flex: 1, marginRight: 5 }}>
            <Input label="tempo de descanso" />
          </View>
          <View style={{ flex: 1, marginLeft: 5 }}>
            <Input label="cadência" />
          </View>
        </Row>
        <Row style={{ justifyContent: 'flex-end', marginTop: 5 }}>
          <Button
            textColor={theme.colors.secondary}
            onPress={() => setModalVisible(false)}>
            <Font type="semibold">cancelar</Font>
          </Button>
          <Button
            mode="outlined"
            textColor={theme.colors.secondary}
            onPress={() => {
              dispatch({
                type: 'ADD_EXERCISE',
                payload: {
                  // TODO: fix default values
                  workoutId: state.currentWorkout?.id || 1,
                  exercise: { name: exerciseNameInput || '', sets: 4, reps: 10 }
                }
              });
              setModalVisible(false);
            }}>
            <Font type="semibold">adicionar</Font>
          </Button>
        </Row>
      </Modal>
    </Portal>
  );
};

export default WorkoutModal;
