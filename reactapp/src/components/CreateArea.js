//CreateArea.js
import React, { useState } from 'react';

const CreateArea = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleAdd = () => {
    onAdd({ title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <div>
      <input type="text" id="title" placeholder="Title" value={title} onChange={handleTitleChange} />
      <textarea id="desc" placeholder="Take a note..." rows="3" value={description} onChange={handleDescriptionChange} />
      <button id="addNotes" onClick={handleAdd}>Add</button>
    </div>
  );
};

export default CreateArea;
