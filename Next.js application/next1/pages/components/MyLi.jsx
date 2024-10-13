import React, { useState, useRef, useEffect } from 'react';


const MyLi = ({
  id,
  date,
  firstName,
  lastName,
  onDelete,
  onUpdateFirstName,
  onUpdateLastName
}) => {
  const [editingFirstName, setEditingFirstName] = useState(false);
  const [editingLastName, setEditingLastName] = useState(false);
  const [myFirstName, setMyFirstName] = useState(firstName);
  const [myLastName, setMyLastName] = useState(lastName);

  const firstNameInputRef = useRef(null);
  const lastNameInputRef = useRef(null);

  useEffect(() => {
    if (editingFirstName && firstNameInputRef.current) {
      firstNameInputRef.current.focus();
    }
    if (editingLastName && lastNameInputRef.current) {
      lastNameInputRef.current.focus();
    }
  }, [editingFirstName, editingLastName]);

  const updateFirstName = () => {
    onUpdateFirstName(myFirstName);
    setEditingFirstName(false);
  };

  const updateLastName = () => {
    onUpdateLastName(myLastName);
    setEditingLastName(false);
  };

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
