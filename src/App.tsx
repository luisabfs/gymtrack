import React from 'react'
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterWorkoutRecord from './screens/RegisterWorkoutRecord';
import Workout from './screens/Workout';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  
  return (
    <NavigationContainer>
      <PaperProvider>
          <Stack.Navigator>
            <Stack.Screen name="Workout" component={Workout} />
            <Stack.Screen name="RegisterWorkoutRecord" component={RegisterWorkoutRecord} />
          </Stack.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
}

export default App;
