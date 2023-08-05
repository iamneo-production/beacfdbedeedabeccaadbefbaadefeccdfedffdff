import React, { useState } from 'react';
import CreateArea from './components/CreateArea';
import Note from './components/Note';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  const [notes, setNotes] = useState([]);

  const handleAddNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const handleDeleteNote = (index) => {
    setNotes((prevNotes) => prevNotes.filter((_, i) => i !== index));
  };

  return (
    <div>
      <Header />
      <CreateArea onAdd={handleAddNote} />
      <div>
        {notes.map((note, index) => (
          <Note
            key={index}
            title={note.title}
            description={note.description}
            onDelete={() => handleDeleteNote(index)}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default App;