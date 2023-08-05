//Note.js
import React from 'react';

const Note = ({ title, description, onDelete }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default Note;