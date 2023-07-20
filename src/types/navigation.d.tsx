import type { RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RegisterWorkoutRecordParamList = {
  RegisterRecordInfo: undefined;
  RegisterWorkouts: {
    recordName: string;
  };
};

export type RegisterWorkoutRecordNavigationProp =
  NativeStackNavigationProp<RegisterWorkoutRecordParamList>;

export type RegisterWorkoutRecordRouteProp =
  RouteProp<RegisterWorkoutRecordParamList>;
