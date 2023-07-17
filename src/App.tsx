import React from 'react';
import { StatusBar } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterWorkoutRecord from './screens/RegisterWorkoutRecord';
import theme from './themes';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <PaperProvider>
          <StatusBar barStyle={'light-content'} />
          <Stack.Navigator
            screenOptions={{
              headerShown: false
            }}>
            <Stack.Screen
              name="RegisterWorkoutRecord"
              component={RegisterWorkoutRecord}
            />
          </Stack.Navigator>
        </PaperProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
}

export default App;
