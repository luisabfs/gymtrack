import React, { createContext, useState } from 'react';
import {
  useRegisterWorkoutRecord,
  ActionsType,
  State
} from '../hooks/RegisterWorkoutRecord';

interface Exercise {
  name: string;
  sets: number;
  reps: number;
}

interface Workout {
  id: string;
  name?: string;
  muscleGroups?: string[];
  workoutWeekdays?: string[];
  exercises?: Exercise[];
}

interface WorkoutRecord {
  name: string;
  goal: string;
  weekdays: string[];
  workouts?: Workout[];
}

interface RegisterWorkoutRecordContextData {
  workoutRecord: WorkoutRecord;
  setWorkoutRecord: (WorkoutRecord: WorkoutRecord) => void;
  state: State;
  dispatch: React.Dispatch<ActionsType>;
}

export const RegisterWorkoutRecordContext =
  createContext<RegisterWorkoutRecordContextData>({
    workoutRecord: { name: '', goal: '', weekdays: [] },
    setWorkoutRecord: () => {},
    dispatch: () => {
      {
        'SAVE_INFO' || 'ADD_WORKOUT';
      }
    },
    state: {
      name: '',
      goal: '',
      workouts: []
    }
  });

export const RegisterWorkoutRecordProvider: React.FC<{
  children: React.ReactElement;
}> = ({ children }) => {
  const [workoutRecord, setWorkoutRecord] = useState<WorkoutRecord>({
    name: '',
    goal: '',
    weekdays: []
  });
  const { state, dispatch } = useRegisterWorkoutRecord();

  return (
    <RegisterWorkoutRecordContext.Provider
      value={{
        workoutRecord,
        setWorkoutRecord,
        dispatch,
        state
      }}>
      {children}
    </RegisterWorkoutRecordContext.Provider>
  );
};
