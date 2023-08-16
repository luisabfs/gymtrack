import { useReducer } from 'react';

interface Exercise {
  name: string;
  sets: number;
  reps: number;
}

interface Workout {
  id?: number;
  name?: string;
  muscleGroups?: string[];
  workoutWeekdays?: string[];
  exercises?: Exercise[];
  status?: 'INITIALIZED' | 'FINISHED';
}

export interface State {
  name: string;
  goal: string;
  workouts: Workout[];
  currentWorkout?: Workout;
}

export interface Actions {
  type: 'SAVE_INFO' | 'ADD_WORKOUT' | 'ADD_EXERCISE';
  payload?: {
    name: string;
    goal: string;
    workout: Workout;
    workoutId?: number;
    exercise?: Exercise;
  };
}

export type ActionsType =
  | {
      type: 'SAVE_INFO';
      payload: { name: string; goal: string };
    }
  | {
      type: 'ADD_WORKOUT';
      payload: { workout: Workout };
    }
  | {
      type: 'INIT_WORKOUT';
      payload: { id: number };
    }
  | {
      type: 'ADD_EXERCISE';
      payload: { workoutId: number; exercise: Exercise };
    }
  | {
      type: 'SET_CURRENT_WORKOUT';
      payload: { id?: number };
    };

function registerWorkoutRecordReducer(
  state: State,
  action: ActionsType
): State {
  switch (action.type) {
    case 'SAVE_INFO':
      return {
        ...state,
        name: action.payload.name || '',
        goal: action.payload.goal || ''
      };
    case 'INIT_WORKOUT':
      return {
        ...state,
        workouts: [
          ...state.workouts,
          {
            id: action.payload.id,
            status: 'INITIALIZED'
          }
        ],
        currentWorkout: {
          id: action.payload.id,
          status: 'INITIALIZED'
        }
      };
    case 'ADD_WORKOUT':
      return {
        ...state,
        workouts: [
          ...state.workouts.filter(
            (storedWorkout) => storedWorkout.id !== state.currentWorkout?.id
          ),
          {
            id: state.currentWorkout?.id,
            ...action.payload.workout
          }
        ],
        currentWorkout: undefined
      };
    case 'ADD_EXERCISE':
      // eslint-disable-next-line no-case-declarations
      const workoutToAdd = state.workouts.find(
        (storedWorkout) => storedWorkout.id === action.payload.workoutId
      )!;
      return {
        ...state,
        workouts: [
          ...state.workouts.filter(
            (storedWorkout) => storedWorkout.id !== action.payload.workoutId
          ),
          {
            ...workoutToAdd,
            exercises: workoutToAdd.exercises?.length
              ? [...workoutToAdd.exercises, action.payload.exercise]
              : [action.payload.exercise]
          }
        ],
        currentWorkout: {
          ...workoutToAdd,
          exercises: workoutToAdd.exercises?.length
            ? [...workoutToAdd.exercises, action.payload.exercise]
            : [action.payload.exercise]
        }
      };
    case 'SET_CURRENT_WORKOUT':
      return {
        ...state,
        currentWorkout: action.payload.id
          ? {
              ...state.workouts.find(
                (storedWorkout) => storedWorkout.id !== action.payload.id
              )
            }
          : undefined
      };

    default:
      return state;
  }
}

export const useRegisterWorkoutRecord = () => {
  const [state, dispatch] = useReducer(registerWorkoutRecordReducer, {
    name: '',
    goal: '',
    workouts: [],
    currentWorkout: {}
  });

  console.log('useRegisterWorkoutRecord', state);

  return { state, dispatch };
};
