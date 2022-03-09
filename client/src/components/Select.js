import React, { useContext } from "react";
import { FormContext } from "../FormContext";

// Creating a select component to handle dynamic fields

const Select = ({ field_id, field_label, field_value, field_options }) => {
  const { handleChange } = useContext(FormContext);
  return (
    <div>
      <label>
        <p>{field_label}</p>
      </label>
      <select
        className="w-full"
        name={field_id}
        onChange={(event) => handleChange(field_id, event)}
      >
        <option value="">--Please choose an option--</option>
        {field_options.length > 0 &&
          field_options.map((option, i) => (
            <option value={option.option_label} key={i}>
              {option.option_label}
            </option>
          ))}
      </select>
    </div>
  );
};

export default Select;
