import React, { useContext } from "react";
import { FormContext } from "../FormContext";

const Input = ({ field_id, field_label, field_placeholder, field_value }) => {
  const { handleChange } = useContext(FormContext);
  return (
    <div>
      <label>
        <p>{field_label}</p>
      </label>
      <input
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
