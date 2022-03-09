import React, { useContext } from "react";
import { FormContext } from "../FormContext";

// Creating a textarea component to handle dynamic fields

const Input = ({
  field_type,
  field_id,
  field_label,
  field_placeholder,
  field_value,
}) => {
  const { handleChange } = useContext(FormContext);
  return (
    <div>
      <label>
        <p>{field_label}</p>
      </label>
      <textarea
        className="w-full"
        name={field_id}
        placeholder={field_placeholder ? field_placeholder : "name"}
        value={field_value ? field_value : ""}
        onChange={(event) => handleChange(field_id, event)}
      />
    </div>
  );
};

export default Input;
