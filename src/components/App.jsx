import React from "react";
import contacts from "../contacts";

function App(contacts) {
  return (
    <div>
      <h1 className="heading">Quique's Contacts</h1>
      <div className="card">
        <div className="top">
          <h2>{name}</h2>
          <img src={contacts.imgURL} alt="avatar_img" />
        </div>
        <div className="bottom">
          <p>{contacts.phone}</p>
          <p>{contacts.email}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
