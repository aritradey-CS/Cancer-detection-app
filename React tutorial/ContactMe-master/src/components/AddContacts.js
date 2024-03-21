import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddContacts = ({ addContactHandler }) => {
  const [state, setState] = useState({ name: '', email: '' })
  const navigate = useNavigate()

  const add = (e) => {
    console.log(state)
    e.preventDefault();
    if (state.name === "" && state.email === "") {
      alert("All the fields are mandatory!");
      return;
    }
    addContactHandler(state);
    setState({ name: "", email: "" });
    navigate("/");
  };

  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          Add Contact
        </h5>

        <div className="card-text">
          <form className="ui form" onSubmit={add}>
            <div className="field">
              <label htmlFor="">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={state.name}
                onChange={(e) => setState((prev) => ({ ...prev, name: e.target.value }))}
              />
            </div>

            <div className="field">
              <label>Email</label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={state.email}
                onChange={(e) => setState((prev) => ({ ...prev, email: e.target.value }))}
              />
            </div>

            <div className="card-link">
              <button className="btn btn-success mt-2" type="submit">Add</button>
            </div>
          </form>
        </div>
        {/* <a href="#" class="card-link">Another link</a> */}
      </div>
    </div>
  )
}

export default AddContacts