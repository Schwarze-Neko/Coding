import React, { useState } from 'react';
import Person from './Person';

const AddPerson: React.FC = () => {
const [entries, setEntries] = useState<Person[]>([new Person('', '', '')]);



  const removeEntry = (index: number) => {
    setEntries(entries.filter((_, i) => i !== index));
  };


  const addEntry = () => {
    if (entries.length === 0) {
      setEntries([new Person('', '', '')]);
      return;
    }

    const lastEntry = entries[entries.length - 1]; 

    if (typeof lastEntry.firstname === 'string' && !lastEntry.firstname.trim()) {
      alert("Please enter a name");
      return;
    }

    if (typeof lastEntry.lastname === 'string' && !lastEntry.lastname.trim()) {
      alert("Please enter a surname");
      return;
    }

    if (typeof lastEntry.birthday === 'string' && !lastEntry.birthday.trim()) {
      alert("Please enter a birth date");
      return;
    }

    setEntries([...entries, new Person('', '', '')]);
  };

  
  

  function handleChange(e: React.ChangeEvent<HTMLInputElement>, index: number, arg2: string): void {
    throw new Error('Function not implemented.');
  }

  
  return (
    <div>
      <h1>Person Table</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Birthday</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={index}>
              <td><input type="text" value={entry.firstname} onChange={(e) => handleChange(e, index, 'firstName')} /></td>
              <td><input type="text" value={entry.lastname} onChange={(e) => handleChange(e, index, 'lastName')} /></td>
              <td><input type="text" value={entry.birthday} onChange={(e) => handleChange(e, index, 'birthdate')} /></td>
              <td><button onClick={() => removeEntry(index)}>Remove Entry</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={addEntry}>Add Entry</button>
    </div>
  );
};

export default AddPerson;
