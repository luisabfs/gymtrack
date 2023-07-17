import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { Font } from '../../components';
import { Container, ProgressBar } from './styles';

const RegisterWorkoutRecord: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#333' }}>
      <Container>
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
            justifyContent: 'space-between'
          }}>
          <View style={{ justifyContent: 'flex-end' }}>
            <Font size={18} type="bold">
              ficha de treino atual:
            </Font>
          </View>
          <View>
            <Font size={11} type="thin">
              passo
            </Font>
            <Font size={18} type="bold">
              1/3
            </Font>
          </View>
        </View>
      </Container>
    </SafeAreaView>
  );
};

export default RegisterWorkoutRecord;
