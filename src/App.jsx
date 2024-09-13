import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note.jsx";  // Ensure this matches the actual file name.

import "./App.css";
import notes from "./notes.js";


function App() {
  return (
    <>
      <Header />
      <Footer />
      {notes.map((noteVal)=>{
        return (
          <Note 
          
          key={noteVal.key}
          title={noteVal.title}
          content={noteVal.content}

          />
        )
      })}
    </>
  );
}

export default App;
