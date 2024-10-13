import React, { useState } from 'react';
import './Ue03.css';


const Uebung03: React.FC = () => {
  
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [persons, setPersons] = useState<Person[]>([]);

  interface Person {
    date: number;
    firstName: string;
    lastName: string;
  }
  

  const saveHandler = () => {
    if (firstName.trim() !== '' && lastName.trim() !== '') {
      const newPerson: Person = {
        date: Date.now(), 
        firstName: firstName,
        lastName: lastName
      };
      setPersons([...persons, newPerson]);
      setFirstName(''); 
      setLastName('');  
    }
  };

  const deleteHandler = (date: number) => {
    setPersons(persons.filter(person => person.date !== date));
  };

  const updateFirstNameHandler = (date: number, newFirstName: string) => {
    setPersons(persons.map(person => {
      if (person.date === date) {
        return { ...person, firstName: newFirstName };
      }
      return person;
    }));
  };

  const updateLastNameHandler = (date: number, newLastName: string) => {
    setPersons(persons.map(person => {
      if (person.date === date) {
        return { ...person, lastName: newLastName };
      }
      return person;
    }));
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {persons.map(person => (
            <tr key={person.date}>
              <td>
                <input
                  type="text"
                  value={person.firstName}
                  onChange={e => updateFirstNameHandler(person.date, e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={person.lastName}
                  onChange={e => updateLastNameHandler(person.date, e.target.value)}
                />
              </td>
              <td>
                <button onClick={() => deleteHandler(person.date)}>X</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
        <button onClick={saveHandler}>Add Person</button>
      </div>
    </div>
  );
};

export default Uebung03;
