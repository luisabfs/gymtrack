import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { useTheme } from 'styled-components/native';
import { Font, Input, Accordion } from '../../components';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { RegisterWorkoutRecordNavigationProp } from '../../types/navigation.d';

import { Container, ProgressBar } from './styles';

const RegisterRecordInfo: React.FC = () => {
  const theme = useTheme();
  const navigation = useNavigation<RegisterWorkoutRecordNavigationProp>();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#333' }}>
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
          <Input rounded icon="pencil" label="nome" placeholder='"01/2023"' />
          <Input
            rounded
            label="objetivo"
            placeholder='"Hipertrofia"'
            icon="bullseye-arrow"
          />

          {/* // TODO: add date picker */}
          <Input rounded label="período" icon="calendar" />

          <Accordion leftIcon="dumbbell" label="dias de treino" />
        </View>

        <View>
          <Button
            style={{ borderRadius: 4, marginBottom: 15 }}
            mode="contained"
            buttonColor={theme.colors.accent}
            onPress={() =>
              navigation.navigate('RegisterWorkouts', { recordName: '01/2023' })
            }>
            <Font type="semibold">próximo →</Font>
          </Button>
        </View>
      </Container>
    </SafeAreaView>
  );
};

export default RegisterRecordInfo;
