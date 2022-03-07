import React, { useState, useReducer, useEffect } from "react";
import "./App.css";
import Element from "./components/Element";
import testForm from "./testForm.json";

console.log("testForm", testForm);

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
  const [elements, setElement] = useState(null);

  useEffect(() => {
    setElement(testForm[0]);
  }, []);

  const { fields, page_label } = elements ?? {};

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
      <h1> {page_label}</h1>
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
          {fields
            ? fields.map((field, i) => (
                <Element key={i} field={field} onChange={handleChange} />
              ))
            : null}
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
