import React from 'react';
import { PersonProvider } from './PersonContext';
import PersonTable from './PersonTable';
import AddPerson from './AddPerson';

const App: React.FC = () => {
  return (
    <PersonProvider>
      <div>
        <h1>Person Entries</h1>
        <PersonTable />
        <AddPerson />
      </div>
    </PersonProvider>
  );
};

export default App;
