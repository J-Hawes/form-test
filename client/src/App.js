import React, { useState, useReducer } from "react";
import "./App.css";

const formReducer = (state, event) => {
  if (event.reset) {
    return {
      name: "",
      email: "",
      phonetype: "",
      number: "",
      subscribe: false,
    };
  }
  return {
    ...state,
    [event.name]: event.value,
  };
};

function App() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      //window.location.href = "thanks.html";
      setFormData({
        reset: true,
      });
    }, 3000);
  };

  const handleChange = (event) => {
    const isCheckbox = event.target.type === "checkbox";
    setFormData({
      name: event.target.name,
      value: isCheckbox ? event.target.checked : event.target.value,
    });
  };

  return (
    <div className="wrapper">
      <h1> Form Test</h1>
      {submitting && (
        <div>
          You are submitting the following:
          <ul>
            {Object.entries(formData).map(([name, value]) => (
              <li key={name}>
                <strong>{name}</strong> : {value.toString()}
              </li>
            ))}
          </ul>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Name</p>
            <input
              name="name"
              placeholder="name"
              onChange={handleChange}
              value={formData.name || ""}
            />
          </label>
          <label>
            <p>Email Address</p>
            <input
              name="email"
              placeholder="example@address.com"
              onChange={handleChange}
              value={formData.email || ""}
            />
          </label>
          <label>
            <p>Phone type</p>
            <select
              name="phonetype"
              onChange={handleChange}
              value={formData.phonetype || ""}
            >
              <option value="">--Please choose an option--</option>
              <option value="home">home</option>
              <option value="work">work</option>
              <option value="mobile">mobile</option>
            </select>
          </label>
          <label>
            <p>Number</p>
            <input
              name="number"
              placeholder="04xxxxxxxx"
              onChange={handleChange}
              value={formData.number || ""}
            />
          </label>
          <label>
            <p>Subscribe</p>
            <input
              type="checkbox"
              name="subscribe"
              onChange={handleChange}
              checked={formData.subscribe || false}
            />
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
