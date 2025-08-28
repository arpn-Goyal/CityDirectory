import React from "react";

const FilterDropdown = ({ label, options, value, setValue }) => {
  return (
    <select
      className="form-select"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    >
      <option value="">{label}</option>
      {options.map((opt, i) => (
        <option key={i} value={opt}>{opt}</option>
      ))}
    </select>
  );
};

export default FilterDropdown;
