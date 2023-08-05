import React, { useState, useCallback, memo } from 'react';
import styles from "../App.css";

const CreateArea = ({ onAdd }) => {
const [title, setTitle] = useState('');
const [description, setDescription] = useState('');

const handleTitleChange = useCallback((e) => {
setTitle(e.target.value);
}, []);

const handleDescriptionChange = useCallback((e) => {
setDescription(e.target.value);
}, []);

const handleAdd = useCallback(() => {
if (title && description) {
onAdd({ title, description });
setTitle('');
setDescription('');
}
}, [title, description, onAdd]);

return (
<div>
<input type="text" id="title" placeholder="Title" value={title} onChange={handleTitleChange} />
<textarea id="desc" placeholder="Take a note..." rows="3" value={description} onChange={handleDescriptionChange} />
<button id="addNotes" onClick={handleAdd}>Add</button>
</div>
);
};
export default memo(CreateArea);
