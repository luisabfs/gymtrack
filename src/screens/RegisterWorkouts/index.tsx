import React, { useState } from 'react';
import { View } from 'react-native';
import {
  SafeAreaView,
  useSafeAreaInsets
} from 'react-native-safe-area-context';

import { useTheme } from 'styled-components/native';
import { Font, Accordion, Input } from '../../components';
import { Button, Portal, Modal } from 'react-native-paper';
import { useRoute } from '@react-navigation/native';
import { RegisterWorkoutRecordRouteProp } from '../../types/navigation.d';
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
  const route = useRoute<RegisterWorkoutRecordRouteProp>();
  const safeAreaInsets = useSafeAreaInsets();

  const [modalVisible, setModalVisible] = useState(false);
  const [muscleGroupInput, setMuscleGroupInput] = useState('');
  const [muscleGroups, setMuscleGroups] = useState<string[]>([]);

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
                treinos da ficha{` ${route.params?.recordName}` || ''}:
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

          <Accordion rowWeekDays expandedFirst>
            <Row>
              <Font type="bold" size={16}>
                grupo muscular
              </Font>
              <CustomDivider />
            </Row>
            <Row style={{ flexWrap: 'wrap' }}>
              {muscleGroups.length
                ? muscleGroups.map((group) => (
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
                          muscleGroups.filter((value) => value !== group)
                        )
                      }>
                      <Font size={12} type="light">
                        {group}
                      </Font>
                    </MuscleGroupTag>
                  ))
                : null}
            </Row>
            <Row>
              <View style={{ flex: 1 }}>
                {/* TODO: remove capitalization */}
                <Input
                  onChangeText={(text: string) => setMuscleGroupInput(text)}
                  value={muscleGroupInput}
                />
              </View>
              <Button
                icon={'plus'}
                textColor={theme.colors.accent}
                disabled={!muscleGroupInput}
                theme={{
                  colors: { onSurfaceDisabled: theme.colors.disabled2 }
                }}
                onPress={() => {
                  setMuscleGroupInput('');
                  setMuscleGroups([...muscleGroups, muscleGroupInput]);
                }}>
                <Font
                  size={12}
                  type="light"
                  color={
                    !muscleGroupInput ? theme.colors.fonts.secondary : undefined
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
              <Portal>
                <Modal
                  contentContainerStyle={{
                    backgroundColor: theme.colors.darker,
                    padding: 20,
                    margin: 20
                  }}
                  theme={{ colors: { backdrop: 'rgba(0, 0, 0, 0.6)' } }}
                  visible={modalVisible}>
                  <Input label="nome do exercício" />
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
                      onPress={() => setModalVisible(false)}>
                      <Font type="semibold">adicionar</Font>
                    </Button>
                  </Row>
                </Modal>
              </Portal>

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
          {/* TODO: only show when accordion is expanded */}
          <Button
            onPress={() => setModalVisible(true)}
            icon={'plus'}
            style={{
              borderRadius: 4,
              marginTop: 15,
              borderColor: theme.colors.fonts.primary
            }}
            mode="outlined"
            textColor={theme.colors.fonts.primary}>
            <Font type="semibold" color={theme.colors.fonts.primary}>
              adicionar treino
            </Font>
          </Button>
        </View>
        <View>
          <Button
            style={{ borderRadius: 4, marginBottom: 15 }}
            mode="contained"
            buttonColor={theme.colors.accent}>
            <Font type="semibold">próximo →</Font>
          </Button>
        </View>
      </Container>
    </SafeAreaView>
  );
};

export default RegisterWorkouts;
