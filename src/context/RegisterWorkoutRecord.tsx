import React, { createContext, useState } from 'react';

interface Exercise {
  name: string;
  sets: number;
  reps: number;
}

interface Workout {
  name?: string;
  muscleGroups?: string[];
  workoutWeekdays?: string[];
  exercises?: Exercise[];
}

interface WorkoutRecord {
  name: string;
  goal: string;
  weekdays: string[];
  workouts?: Workout;
}

interface RegisterWorkoutRecordContextData {
  workoutRecord: WorkoutRecord;
  setWorkoutRecord: (WorkoutRecord: WorkoutRecord) => void;
}

export const RegisterWorkoutRecordContext =
  createContext<RegisterWorkoutRecordContextData>({
    workoutRecord: { name: '', goal: '', weekdays: [] },
    setWorkoutRecord: () => {}
  });

export const RegisterWorkoutRecordProvider: React.FC<{
  children: React.ReactElement;
}> = ({ children }) => {
  const [workoutRecord, setWorkoutRecord] = useState<WorkoutRecord>({
    name: '',
    goal: '',
    weekdays: []
  });

  return (
    <RegisterWorkoutRecordContext.Provider
      value={{
        workoutRecord,
        setWorkoutRecord
      }}>
      {children}
    </RegisterWorkoutRecordContext.Provider>
  );
};
