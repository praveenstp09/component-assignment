import React from "react";
import "./Select.css";
import "./../../../colorSystem/color.css";
type SelectProps = {
  label: string;
  name?: string;
  value?: string;
  placeholder?: string;
  options: string[];
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Select = ({
  label,
  name,
  value,
  placeholder,
  options,
  onChange,
}:SelectProps) => {
  return (
    <>
      <label className="label">{label}</label>
      <select
        name={name}
        value={value}
        className={`select`}
        onChange={onChange}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
