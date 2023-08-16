import React, { useState, useContext, useEffect } from 'react';
import { View } from 'react-native';
import {
  SafeAreaView,
  useSafeAreaInsets
} from 'react-native-safe-area-context';

import { useTheme } from 'styled-components/native';
import { Font, Accordion, Input, WorkoutModal } from '../../components';
import { Button, Divider } from 'react-native-paper';
import { RegisterWorkoutRecordContext } from '../../context/RegisterWorkoutRecord';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  ProgressBar,
  Row,
  CustomDivider,
  MuscleGroupTag
} from './styles';

const RegisterWorkouts: React.FC = () => {
  const theme = useTheme();
  const safeAreaInsets = useSafeAreaInsets();
  const { dispatch, state, workoutRecord } = useContext(
    RegisterWorkoutRecordContext
  );

  const [expanded, setExpanded] = useState<number>();
  const [modalVisible, setModalVisible] = useState(false);
  const [muscleGroupInput, setMuscleGroupInput] = useState('');
  const [exerciseNameInput, setExerciseNameInput] = useState('');
  const [muscleGroups, setMuscleGroups] = useState<string[]>([]);
  const [workoutNameInput, setWorkoutNameInput] = useState<string>('');

  // const validateInputs = (): boolean => {
  //   return (
  //     !!exerciseNameInput &&
  //     !!workoutNameInput &&
  //     !!state.currentWorkout?.exercises?.length
  //   );
  // };

  useEffect(() => {
    state.currentWorkout?.status === 'INITIALIZED' &&
      setExpanded(state.currentWorkout.id);
  }, [state.currentWorkout]);

  console.log('state:>> ', state);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
        paddingTop: -safeAreaInsets.top
      }}>
      <Container>
        <View style={{ flex: 1 }}>
          <View
            style={{
              flexDirection: 'row',
              width: '100%'
            }}>
            <ProgressBar />
            <ProgressBar active />
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
                treinos da ficha
                {state.name ? ` ${state.name}` : ''}:
              </Font>
            </View>
            <View>
              <Font size={11} type="light">
                passo
              </Font>
              <Font size={18} type="bold">
                2/3
              </Font>
            </View>
          </View>

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
                        {workout.muscleGroups
                          ? workout.muscleGroups.map((group) => (
                              <MuscleGroupTag
                                key={group}
                                mode="outlined"
                                compact
                                closeIcon={() => (
                                  <Icon
                                    size={18}
                                    name={'close'}
                                    color={theme.colors.secondary}
                                  />
                                )}
                                onClose={() =>
                                  setMuscleGroups(
                                    muscleGroups.filter(
                                      (value) => value !== group
                                    )
                                  )
                                }>
                                <Font size={12} type="light">
                                  {group}
                                </Font>
                              </MuscleGroupTag>
                            ))
                          : muscleGroups.map((group) => (
                              <MuscleGroupTag
                                key={group}
                                mode="outlined"
                                compact
                                closeIcon={() => (
                                  <Icon
                                    size={18}
                                    name={'close'}
                                    color={theme.colors.secondary}
                                  />
                                )}
                                onClose={() =>
                                  setMuscleGroups(
                                    muscleGroups.filter(
                                      (value) => value !== group
                                    )
                                  )
                                }>
                                <Font size={12} type="light">
                                  {group}
                                </Font>
                              </MuscleGroupTag>
                            ))}
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
                          <Font type="semibold" color={theme.colors.secondary}>
                            adicionar exercício
                          </Font>
                        </Button>
                      </View>
                    </Accordion>
                  )
              ) // ))
            : null}
          <Button
            onPress={() => {
              if (state.currentWorkout?.status === 'INITIALIZED') {
                dispatch({
                  type: 'ADD_WORKOUT',
                  payload: {
                    workout: {
                      name: workoutNameInput,
                      muscleGroups,
                      exercises: [
                        { name: exerciseNameInput, reps: 10, sets: 4 }
                      ],
                      workoutWeekdays: workoutRecord.weekdays,
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
              setMuscleGroupInput('');
              setWorkoutNameInput('');
              setMuscleGroups([]);
              setExpanded(state.workouts.length + 1);
            }}
            icon={
              state.currentWorkout?.status === 'INITIALIZED' ? 'check' : 'plus'
            }
            style={{
              borderRadius: 4,
              marginTop: 15,
              borderColor:
                // !validateInputs()
                //   ? theme.colors.disabled2
                //   :
                theme.colors.fonts.primary
            }}
            mode="outlined"
            // disabled={!validateInputs()}
            theme={{
              colors: { onSurfaceDisabled: theme.colors.disabled2 }
            }}
            textColor={theme.colors.fonts.primary}>
            <Font
              type="semibold"
              color={
                // validateInputs()
                //   ?
                theme.colors.fonts.primary
                // : theme.colors.disabled2
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
    </SafeAreaView>
  );
};

export default RegisterWorkouts;
