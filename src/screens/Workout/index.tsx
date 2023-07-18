import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, View } from 'react-native';
import styled, { useTheme } from 'styled-components/native';
import { Checkbox, TextInput, Button, Divider } from 'react-native-paper';
import { saveExercise } from '../../config/firebase';

const Title = styled.Text`
  font-size: 32px;
  color: #ff0000;
  text-align: center;
  font-weight: bold;
`;

const Text = styled.Text`
  font-size: 16px;
  color: white;
`;

const Row = styled.View`
  flex-direction: row;
`;

const Input = styled(TextInput)`
  flex: 1;
  margin: 5px;
`;

interface Exercise {
  id: string;
  name: string;
  sets: Set[];
}

interface Set {
  reps?: number;
  weight?: number;
}

function Workout(): JSX.Element {
  const theme = useTheme();
  const [exercises, setExercices] = useState<any[]>([
    {
      id: Math.random().toString(36).slice(2, 10),
      name: 'Agachamento',
      sets: [{ reps: 0, weight: 0 }]
    }
  ]);
  const [newExercise, setNewExercise] = useState('');

  const addSet = (exerciseId: string) => {
    setExercices(
      exercises.map((ex: Exercise) => {
        if (exerciseId === ex.id) {
          return { ...ex, sets: [...ex.sets, { reps: 0, weight: 0 }] };
        }

        return ex;
      })
    );
    saveExercise(newExercise);
    console.log('aft3r', exercises);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <StatusBar barStyle={'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={{ padding: 10 }}>
          <Title style={{ color: theme.colors.accent }}>GymTrack</Title>
          <Input
            mode="outlined"
            label="Exercício"
            value={newExercise}
            onChangeText={(text) => setNewExercise(text)}
          />

          <Divider bold style={{ marginTop: 20, marginBottom: 20 }} />
          {exercises.map((ex) => (
            <View key={ex}>
              {/* <Checkbox key={ex.name} status='indeterminate' color='red' uncheckedColor='grey' /> */}
              <Text>{ex.name}</Text>
              {ex.sets.map((set: Set) => (
                <View key={set.reps}>
                  <Text>Série {ex.sets.indexOf(set) + 1}</Text>
                  <Row>
                    <Input label="reps" />
                    <Input label="carga (kg)" />
                  </Row>
                </View>
              ))}
              <Button onPress={() => addSet(ex.id)}>adicionar série</Button>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Workout;
