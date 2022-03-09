import React, { useState, useReducer, useEffect } from "react";
import "../App.css";
import Element from "./Element";
import testForm from "../testForm.json";
import { FormContext } from "../FormContext";
import { useNavigate, useLocation } from "react-router-dom";

// Handling the state taken from the onChange event, built in reset option

const formReducer = (state, event) => {
  if (event.reset) {
    return {
      name: "",
      email: "",
      "phone type": "",
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
  const [elements, setElement] = useState(null);
  // const [data, setData] = useState(null);
  const location = useLocation();

  let navigate = useNavigate();

  // testing a way to dynamically grab the path location and fetch matching forms, rather than use 2 seperate components
  console.log(location.pathname);
  // further testing the above
  //   useEffect(() => {
  //     fetch(`${location.pathname}`)
  //       .then((res) => res.json())
  //       .then((data) => setData(data));
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, []);

  // passes the form template from the server to the elements, or loads the client side test form if null
  useEffect(() => {
    setElement((data && data.data) || testForm[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { fields, page_label } = elements ?? {};
  // define http post method options and data
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data: formData }),
  };
  // Posts the form response to the server
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(elements.page_label);
    console.log({ formData });
    fetch("/submit", options).then(
      navigate("/thanks", { state: { formData } })
    );
  };
  // builds the form respoonse based on user changes to the input fields
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
      <div className="w-80 mx-auto">
        <h1 className="text-2xl text-center pt-5"> {page_label}</h1>
        <form
          className="text-center bg-blue-100 p-3 rounded-lg"
          onSubmit={handleSubmit}
        >
          {/* Maps over every field in the JSON template and builds a form element for each */}
          <fieldset className="text-left">
            {fields
              ? fields.map((field, i) => <Element key={i} field={field} />)
              : null}
          </fieldset>
          <button
            type="submit"
            className="p-3 bg-blue-300 text-center font-bold text-slate-50 rounded-md shadow "
          >
            Submit
          </button>
        </form>
      </div>
    </FormContext.Provider>
  );
}

export default Form;
