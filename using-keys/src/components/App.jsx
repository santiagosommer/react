import { useState } from "react";
import Card from "./Card"

function App() {
  const [contacts, setContacts] = useState([
    { name: "Santiago" },
    { name: "Mike" },
    { name: "James" },
  ]);

  const addContact = () => {
    setContacts([{ name: "Nuevo" }, ...contacts]);
    console.log(document.getElementsByTagName("div"))
  };

  return (
    <>
      <button onClick={addContact}>Agregar Contacto</button>
      <div>
        {contacts.map((contact) => (
          <Card name={contact.name} />
        ))}
      </div>
    </>
  );
}

export default App;
