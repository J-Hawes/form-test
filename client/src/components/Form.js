import React, { useState, useReducer, useEffect } from "react";
import "../App.css";
import Element from "./Element";
import testForm from "../testForm.json";
import { FormContext } from "../FormContext";
import { useNavigate, useLocation } from "react-router-dom";

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

function Form({ data }) {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);
  const [elements, setElement] = useState(null);
  // const [data, setData] = useState(null);
  const location = useLocation();

  let navigate = useNavigate();

  console.log(location.pathname);

  // useEffect(() => {
  //   fetch(location.pathname)
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  data && console.log(data.data);

  useEffect(() => {
    setElement((data && data.data) || testForm[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { fields, page_label } = elements ?? {};

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);
    console.log(formData);

    setTimeout(() => {
      setFormData({
        reset: true,
      });
      navigate("/thanks");
    }, 3000);
  };

  const handleChange = (id, event) => {
    const newElements = { ...elements };
    const isCheckbox = event.target.type === "checkbox";
    newElements.fields.forEach((field) => {
      const { field_type, field_id } = field;
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

export default Form;
