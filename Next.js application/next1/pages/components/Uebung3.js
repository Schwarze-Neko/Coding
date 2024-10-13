import React, { useState } from 'react';

import MyLi from './MyLi.jsx';
import Link from 'next/link.js';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [persons, setPersons] = useState([]);

  function saveHandler() {
    if (firstName.trim() !== '' && lastName.trim() !== '') {
      const newPerson = {
        date: Date.now(),
        firstName,
        lastName
      };
      setPersons([...persons, newPerson]);
      setFirstName('');
      setLastName('');
    }
  }

  function deleteHandler(date) {
    setPersons(persons.filter(person => person.date !== date));
  }

  function updateFirstNameHandler(date, newFirstName) {
    setPersons(persons.map(person => {
      if (person.date === date) {
        return { ...person, firstName: newFirstName };
      }
      return person;
    }));
  }

  function updateLastNameHandler(date, newLastName) {
    setPersons(persons.map(person => {
      if (person.date === date) {
        return { ...person, lastName: newLastName };
      }
      return person;
    }));
  }

  return (
    <div>
      <Link href='/'>Home</Link>
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
}

export default App;
