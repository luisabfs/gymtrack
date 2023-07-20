import React from 'react';
import { StatusBar } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RegisterWorkoutRecordParamList } from './types/navigation.d';
import RegisterRecordInfo from './screens/RegisterRecordInfo';
import RegisterWorkouts from './screens/RegisterWorkouts';
import theme from './themes';

const Stack = createNativeStackNavigator<RegisterWorkoutRecordParamList>();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <PaperProvider>
          <StatusBar
            barStyle={'light-content'}
            backgroundColor={theme.colors.background}
          />
          <Stack.Navigator
            screenOptions={{
              headerShown: false
            }}>
            <Stack.Screen
              name="RegisterRecordInfo"
              component={RegisterRecordInfo}
            />
            <Stack.Screen
              name="RegisterWorkouts"
              component={RegisterWorkouts}
            />
          </Stack.Navigator>
        </PaperProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
}

export default App;
