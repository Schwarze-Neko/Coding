import React, { useState, useRef, useEffect, FunctionComponent } from 'react';
import './MyLi.css';

const MyLi: FunctionComponent<MyLiProps> = ({
  id,
  date,
  firstName,
  lastName,
  onDelete,
  onUpdateFirstName,
  onUpdateLastName
}) => {
  // States for editing names
  const [editingFirstName, setEditingFirstName] = useState<boolean>(false);
  const [editingLastName, setEditingLastName] = useState<boolean>(false);
  // States for storing edited names
  const [myFirstName, setMyFirstName] = useState<string>(firstName);
  const [myLastName, setMyLastName] = useState<string>(lastName);

  // Refs for input fields
  const firstNameInputRef = useRef<HTMLInputElement>(null);
  const lastNameInputRef = useRef<HTMLInputElement>(null);

  // Effect to focus input fields when editing starts
  useEffect(() => {
    if (editingFirstName) {
      firstNameInputRef.current?.focus();
    }
    if (editingLastName) {
      lastNameInputRef.current?.focus();
    }
  }, [editingFirstName, editingLastName]);

  // Function to update first name and exit editing mode
  function updateFirstName() {
    onUpdateFirstName(myFirstName);
    setEditingFirstName(false);
  }

  // Function to update last name and exit editing mode
  function updateLastName() {
    onUpdateLastName(myLastName);
    setEditingLastName(false);
  }

  return (
    <li className={id ? 'saved' : ''}>
      <button onClick={onDelete}>Delete</button>
      <em>{date}</em> --&nbsp;
      {editingFirstName ? (
        <input
          className="edit"
          ref={firstNameInputRef}
          value={myFirstName}
          onChange={e => setMyFirstName(e.target.value)}
          onBlur={updateFirstName}
        />
      ) : (
        <span className="view" onDoubleClick={() => setEditingFirstName(true)}>
          {firstName}
        </span>
      )}
      &nbsp;
      {editingLastName ? (
        <input
          className="edit"
          ref={lastNameInputRef}
          value={myLastName}
          onChange={e => setMyLastName(e.target.value)}
          onBlur={updateLastName}
        />
      ) : (
        <span className="view" onDoubleClick={() => setEditingLastName(true)}>
          {lastName}
        </span>
      )}
    </li>
  );
};

export default MyLi;
