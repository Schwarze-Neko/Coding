import React from 'react';
import { usePersonContext } from './PersonContext';

interface Person {
  firstname: string;
  lastname: string;
  birthday: string;
}

const PersonTable: React.FC = () => {
  const { state } = usePersonContext();

  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Birthday</th>
        </tr>
      </thead>
      <tbody>
        {state.persons.map((person: Person, index: number) => ( 
          <tr key={index}>
            <td>{person.firstname}</td>
            <td>{person.lastname}</td>
            <td>{person.birthday}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PersonTable;
