// Hooks
import { useState } from "react"

// Components
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import Note from "./components/Note.jsx"
import FormComponent from "./components/FormComponent.jsx"


function App() {
  const [notes, setNotes] = useState([]);

  function createNote(note) {
    setNotes([...notes, note]);
  }

  function deleteNote(id) {
    setNotes((prevState) => {
      return prevState.filter((noteItem) => {
        return noteItem.key != id
      })
    });
  }

  return (
    <div>
      <Header />
      <FormComponent createNote={createNote} />
      {
        notes.map((note) => {
          return <Note key={note.key} id={note.key} title={note.title} content={note.content} deleteNote={deleteNote} />;
        })
      }
      <Footer />
    </div>
  )
}

export default App