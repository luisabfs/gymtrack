import React, { useState, useContext, useEffect } from 'react';
import { View, KeyboardAvoidingView } from 'react-native';
import {
  SafeAreaView,
  useSafeAreaInsets
} from 'react-native-safe-area-context';

import { useTheme } from 'styled-components/native';
import {
  Font,
  Accordion,
  Input,
  WorkoutModal,
  Header,
  Tag
} from '../../components';
import { Button, Divider } from 'react-native-paper';
import { RegisterWorkoutRecordContext } from '../../context/RegisterWorkoutRecord';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Container, Row, CustomDivider } from './styles';

const RegisterWorkouts: React.FC = () => {
  const theme = useTheme();
  const safeAreaInsets = useSafeAreaInsets();
  const { dispatch, state } = useContext(RegisterWorkoutRecordContext);

  const [expanded, setExpanded] = useState<number | boolean | undefined>();
  const [modalVisible, setModalVisible] = useState(false);
  const [muscleGroupInput, setMuscleGroupInput] = useState('');
  const [exerciseNameInput, setExerciseNameInput] = useState('');
  const [muscleGroups, setMuscleGroups] = useState<string[]>(
    state.currentWorkout?.muscleGroups || []
  );
  const [workoutNameInput, setWorkoutNameInput] = useState<string>('');

  const validateInputs = (): boolean => {
    return (
      !!exerciseNameInput &&
      !!workoutNameInput &&
      !!state.currentWorkout?.exercises?.length
    );
  };

  const disableButton = (): boolean => {
    return state.workouts.length > 0
      ? (state.currentWorkout && !validateInputs()) ||
          state.workouts.some(
            (workout) => workout?.status === 'INITIALIZED' && !expanded
          )
      : false;
  };

  const handleWorkoutButton = () => {
    setMuscleGroupInput('');
    setWorkoutNameInput('');
    setMuscleGroups([]);

    if (state.currentWorkout?.status === 'INITIALIZED') {
      dispatch({
        type: 'ADD_WORKOUT',
        payload: {
          workout: {
            name: workoutNameInput,
            muscleGroups,
            exercises: [{ name: exerciseNameInput, reps: 10, sets: 4 }],
            workoutWeekdays: state.currentWorkout.workoutWeekdays,
            status: 'FINISHED'
          }
        }
      });
      setExpanded(undefined);
      return;
    }

    dispatch({
      type: 'INIT_WORKOUT',
      payload: { id: state.workouts.length + 1 }
    });
    setExpanded(state.workouts.length + 1);
  };

  useEffect(() => {
    state.currentWorkout?.status === 'INITIALIZED' &&
      setExpanded(state.currentWorkout.id);
  }, [state.currentWorkout]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
        paddingTop: -safeAreaInsets.top
      }}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        <Container
          contentInsetAdjustmentBehavior="automatic"
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}>
          <View style={{ flex: 1 }}>
            <Header
              currentStep={2}
              title={`treinos da ficha ${state.name || ''}`}
            />

            {state.workouts.length
              ? state.workouts.map(
                  (workout) =>
                    workout.status && (
                      <Accordion
                        expanded={expanded === workout.id}
                        setExpanded={setExpanded}
                        key={workout.id}
                        rowWeekDays
                        expandedFirst={
                          workout.status !== 'FINISHED' ? true : false
                        }
                        hasInput
                        workout={workout}
                        inputValue={workoutNameInput}
                        inputOnChangeText={(text: string) =>
                          setWorkoutNameInput(text)
                        }>
                        <Row>
                          <Font type="bold" size={16}>
                            grupo muscular
                          </Font>
                          <CustomDivider />
                        </Row>
                        <Row style={{ flexWrap: 'wrap' }}>
                          {muscleGroups
                            ? muscleGroups.map((group) => (
                                <Tag
                                  key={group}
                                  label={group}
                                  onClose={() =>
                                    setMuscleGroups(
                                      muscleGroups.filter(
                                        (value) => value !== group
                                      )
                                    )
                                  }
                                />
                              ))
                            : null}
                        </Row>
                        <Row>
                          <View style={{ flex: 1 }}>
                            <Input
                              onChangeText={(text: string) =>
                                setMuscleGroupInput(text)
                              }
                              value={muscleGroupInput}
                              capitalize="none"
                            />
                          </View>
                          <Button
                            icon={'plus'}
                            textColor={theme.colors.accent}
                            disabled={!muscleGroupInput}
                            theme={{
                              colors: {
                                onSurfaceDisabled: theme.colors.disabled2
                              }
                            }}
                            onPress={() => {
                              setMuscleGroupInput('');
                              setMuscleGroups([
                                ...muscleGroups,
                                muscleGroupInput
                              ]);
                            }}>
                            <Font
                              size={12}
                              type="light"
                              color={
                                !muscleGroupInput
                                  ? theme.colors.fonts.secondary
                                  : undefined
                              }>
                              ADD
                            </Font>
                          </Button>
                        </Row>
                        <Row>
                          <Font type="bold" size={16}>
                            exercícios
                          </Font>
                          <CustomDivider />
                        </Row>
                        <View>
                          <WorkoutModal
                            modalVisible={modalVisible}
                            setModalVisible={setModalVisible}
                            exerciseNameInput={exerciseNameInput}
                            setExerciseNameInput={setExerciseNameInput}
                          />

                          {workout?.exercises?.length ? (
                            <>
                              {workout.exercises.map((exercise) => (
                                <Row
                                  key={exercise.name}
                                  style={{
                                    justifyContent: 'space-between',
                                    marginTop: 5,
                                    marginBottom: 5
                                  }}>
                                  <Font>{exercise.name}</Font>
                                  <Icon name="pencil" color="white" size={14} />
                                </Row>
                              ))}
                              <Divider
                                style={{
                                  backgroundColor: theme.colors.secondary,
                                  marginTop: 10
                                }}
                              />
                            </>
                          ) : null}

                          <Button
                            onPress={() => setModalVisible(true)}
                            icon={'plus'}
                            textColor={theme.colors.secondary}>
                            <Font
                              type="semibold"
                              color={theme.colors.secondary}>
                              adicionar exercício
                            </Font>
                          </Button>
                        </View>
                      </Accordion>
                    )
                )
              : null}
            <Button
              onPress={handleWorkoutButton}
              icon={
                state.currentWorkout?.status === 'INITIALIZED'
                  ? 'check'
                  : 'plus'
              }
              style={{
                borderRadius: 4,
                marginTop: 15,
                borderColor: disableButton()
                  ? theme.colors.disabled2
                  : theme.colors.fonts.primary
              }}
              mode="outlined"
              disabled={disableButton()}
              theme={{
                colors: { onSurfaceDisabled: theme.colors.disabled2 }
              }}
              textColor={theme.colors.fonts.primary}>
              <Font
                type="semibold"
                color={
                  disableButton()
                    ? theme.colors.disabled2
                    : theme.colors.fonts.primary
                }>
                {state.currentWorkout?.status === 'INITIALIZED'
                  ? `finalizar`
                  : `adicionar treino`}
              </Font>
            </Button>
          </View>
          <View>
            <Button
              style={{ borderRadius: 4, marginBottom: 5 }}
              theme={{ colors: { surfaceDisabled: theme.colors.disabled2 } }}
              mode="contained"
              buttonColor={theme.colors.accent}
              // TODO: validate whole object
              disabled={!state.currentWorkout?.exercises?.length}>
              <Font
                type="semibold"
                color={
                  state.currentWorkout?.exercises?.length
                    ? theme.colors.fonts.primary
                    : theme.colors.fonts.secondary
                }>
                próximo →
              </Font>
            </Button>
          </View>
        </Container>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterWorkouts;
