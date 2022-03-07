import React from "react";

const Select = ({ field_id, field_label, field_value, field_options }) => {
  return (
    <div>
      <label>
        <p>{field_label}</p>
      </label>
      <select>
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
