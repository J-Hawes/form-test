import React, { useContext } from "react";
import { FormContext } from "../FormContext";

const Checkbox = ({ field_id, field_label, field_value }) => {
  const { handleChange } = useContext(FormContext);
  return (
    <div>
      <label>
        <p>{field_label}</p>
      </label>
      <input
        type="checkbox"
        name={field_id}
        checked={field_value ? field_value : false}
        onChange={(event) => handleChange(field_id, event)}
      />
    </div>
  );
};

export default Checkbox;
