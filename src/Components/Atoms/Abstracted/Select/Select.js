import React from "react";

export const Select = ({ name, label, options, setSelections }) => {
  const selectStyle = {
    overflowY: "auto",
    height: "100%"
  };
  const handleChange = e => {
    const values = e.target.filter(option => option.selected);
    setSelections(values);
  };
  return (
    <label>
      {label}
      <select name={name} multiple style={selectStyle} onChange={handleChange}>
        {options.map(option => (
          <option value={option} key={option}>
            option
          </option>
        ))}
      </select>
    </label>
  );
};
