import React, { createContext, useReducer, useContext, ReactNode } from 'react';
import { PersonReducer, initialPersonState } from './PersonReducer';

interface PersonContextType {
  state: any; 
  dispatch: React.Dispatch<any>;
}

const PersonContext = createContext<PersonContextType | undefined>(undefined);

export const usePersonContext = () => {
  const context = useContext(PersonContext);
  if (!context) {
    throw new Error('usePersonContext must be used within a PersonProvider');
  }
  return context;
};

export const PersonProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(PersonReducer, initialPersonState);

  return (
    <PersonContext.Provider value={{ state, dispatch }}>
      {children}
    </PersonContext.Provider>
  );
};
