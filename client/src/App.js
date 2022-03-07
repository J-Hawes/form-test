import React, { useState, useReducer, useEffect } from "react";
import "./App.css";
import Element from "./components/Element";
import testForm from "./testForm.json";
import { FormContext } from "./FormContext";

const formReducer = (state, event) => {
  if (event.reset) {
    return {
      name: "",
      email: "",
      "phone-type": "",
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
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/movers")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  data && console.log(data.data);

  useEffect(() => {
    setElement(testForm[0]);
  }, []);

  const { fields, page_label } = elements ?? {};

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);
    console.log(formData);

    setTimeout(() => {
      //window.location.href = "thanks.html";
      setFormData({
        reset: true,
      });
    }, 3000);
  };

  const handleChange = (id, event) => {
    const newElements = { ...elements };
    const isCheckbox = event.target.type === "checkbox";
    newElements.fields.forEach((field) => {
      const { field_type, field_id, field_value } = field;
      if (id === field_id) {
        switch (field_type) {
          case "checkbox":
            field["field_value"] = event.target.checked;
            break;
          default:
            field["field_value"] = event.target.value;
            break;
        }
      }
      setElement(newElements);
      setFormData({
        name: event.target.name,
        value: isCheckbox ? event.target.checked : event.target.value,
      });
    });
  };

  return (
    <FormContext.Provider value={{ handleChange }}>
      <div className="wrapper">
        <h1> {page_label}</h1>
        {submitting && (
          <div>
            You are submitting the following:
            <ul>
              {Object.entries(formData).map(([name, value]) => {
                return (
                  <li key={name}>
                    <strong>{name}</strong>: {value.toString()}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <fieldset>
            {fields
              ? fields.map((field, i) => <Element key={i} field={field} />)
              : null}
          </fieldset>
          <button type="submit">Submit</button>
        </form>
      </div>
    </FormContext.Provider>
  );
}

export default App;
