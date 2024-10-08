import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note.jsx"; // Ensure this matches the actual file name.
import "./App.css";
import CreateArea from "./components/CreateArea.jsx";

function App() {
  const [NoteVal, NoteFunc] = useState([]);

  function deleteNote(id){
    NoteFunc((prevnote)=>{
      return prevnote.filter((item,index)=>{
        return index !== id;
      });
    })
  }

  function addNote(newNote) {
    NoteFunc((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }
  return (
    <>
      <Header />
      <CreateArea onAdd={addNote} />
      {NoteVal.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </>
  );
}

export default App;
