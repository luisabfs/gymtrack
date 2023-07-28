import React from 'react';
import { StatusBar } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RegisterWorkoutRecordParamList } from './types/navigation.d';
import RegisterRecordInfo from './screens/RegisterRecordInfo';
import RegisterWorkouts from './screens/RegisterWorkouts';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import theme from './themes';

const Stack = createNativeStackNavigator<RegisterWorkoutRecordParamList>();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <SafeAreaProvider>
          <PaperProvider>
            <StatusBar
              barStyle={'light-content'}
              backgroundColor={theme.colors.background}
            />
            <Stack.Navigator
              screenOptions={{
                headerStyle: { backgroundColor: theme.colors.background },
                headerShadowVisible: false,
                headerLeft: () => (
                  <Icon
                    size={37}
                    name={'chevron-left'}
                    color={theme.colors.secondary}
                  />
                ),
                headerTitle: '',
                navigationBarColor: theme.colors.background
              }}>
              <Stack.Screen
                name="RegisterRecordInfo"
                component={RegisterRecordInfo}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="RegisterWorkouts"
                component={RegisterWorkouts}
              />
            </Stack.Navigator>
          </PaperProvider>
        </SafeAreaProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
}

export default App;
