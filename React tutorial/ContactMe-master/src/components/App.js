import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { v4 as uuid } from "uuid";
import "./App.css";
import AddContacts from "./AddContacts";
import ContactList from "./ContactList";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts((prev) => {
      const newContacts = [...prev, { id: uuid(), ...contact }]
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newContacts));
      return newContacts
    });
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newContactList));
    setContacts(newContactList);
  };

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);

  return (
    <div className="ui container">
      {/* <Header />
      <AddContacts addContactHandler={addContactHandler} />
    <ContactList contacts={contacts} getContactID={removeContactHandler} />*/}
      {/* ---------------------------------------------------------------
              old code, but currently not working
      --------------------------------------------------------------- */}

      <BrowserRouter>
        {/* <Header />s */}
        <Routes>
          <Route path="/" exact element={<ContactList contacts={contacts} getContactId={removeContactHandler} />} />
          <Route path="/add" element={<AddContacts addContactHandler={addContactHandler} />} />
        </Routes>
      </BrowserRouter>
      {/* ---------------------------------------------------------------
  old code after adding "Routes" Above code working but not importent now
--------------------------------------------------------------- */}

      {/* <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" exact render={(props) => (
              <ContactList {...props} contacts={contacts} getContactId={removeContactHandler} />)}
          />
          <Route path="/add"  render={(props) => (  <AddContacts {...props} addContactHandler={addContactHandler} />  )}
          />
        </Routes>
      </BrowserRouter> */}
      {/* ---------------------------------------------------------------
        Above code not working but it must run to get to apply future program
--------------------------------------------------------------- */}
    </div>
  );
}

export default App;
