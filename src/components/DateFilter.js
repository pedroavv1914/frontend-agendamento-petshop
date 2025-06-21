import React from "react";
import "./DateFilter.css";

function DateFilter({ value, onChange }) {
  return (
    <input
      className="date-filter"
      type="date"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default DateFilter;