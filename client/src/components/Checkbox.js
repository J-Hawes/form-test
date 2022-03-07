import React from "react";

const Checkbox = ({ field_id, field_label, field_value }) => {
  return (
    <div>
      <label>
        <p>{field_label}</p>
      </label>
      <input
        type="checkbox"
        name={field_id}
        checked={field_value ? field_value : false}
      />
    </div>
  );
};

export default Checkbox;
