import React, { useState } from 'react';
import { View, SafeAreaView } from 'react-native';
import { useTheme } from 'styled-components/native';
import { Font, Accordion, Input } from '../../components';
import { Button, Portal, Modal } from 'react-native-paper';
import { useRoute } from '@react-navigation/native';
import { RegisterWorkoutRecordRouteProp } from '../../types/navigation.d';

import { Container, ProgressBar, Row, CustomDivider } from './styles';

const RegisterWorkouts: React.FC = () => {
  const theme = useTheme();
  const route = useRoute<RegisterWorkoutRecordRouteProp>();

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
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

          <Accordion rowWeekDays>
            <Row>
              <Font type="bold" size={16}>
                grupo muscular
              </Font>
              <CustomDivider />
            </Row>
            <Row>
              <View style={{ flex: 1 }}>
                <Input />
              </View>
              <Button icon={'plus'} textColor={theme.colors.accent}>
                <Font size={12} type="light">
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
