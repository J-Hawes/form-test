import React from "react";

const Input = ({ field_id, field_label, field_placeholder, field_value }) => {
  return (
    <div>
      <label>
        <p>{field_label}</p>
      </label>
      <input
        name={field_id}
        placeholder={field_placeholder ? field_placeholder : "name"}
        value={field_value ? field_value : ""}
      />
    </div>
  );
};

export default Input;
