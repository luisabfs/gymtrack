import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction
} from 'react';

interface RegisterWorkoutRecordContextData {
  weekdayCheckbox: string[];
  setWeekdayCheckbox: Dispatch<SetStateAction<string[]>>;
}

export const RegisterWorkoutRecordContext =
  createContext<RegisterWorkoutRecordContextData>({
    weekdayCheckbox: [],
    setWeekdayCheckbox: () => {}
  });

export const RegisterWorkoutRecordProvider = ({ children }) => {
  const [weekdayCheckbox, setWeekdayCheckbox] = useState<string[]>([]);

  return (
    <RegisterWorkoutRecordContext.Provider
      value={{ weekdayCheckbox, setWeekdayCheckbox }}>
      {children}
    </RegisterWorkoutRecordContext.Provider>
  );
};
