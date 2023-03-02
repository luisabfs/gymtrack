import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  View
} from 'react-native';
import styled from 'styled-components/native';

const Title = styled.Text`
  font-size: 32px;
  color: red;
  text-align: center;
  font-weight: bold;
`;

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar
        barStyle={'dark-content'}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <View
          style={{
            backgroundColor: 'white',
          }}>
          <Title>GymTrack</Title>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
