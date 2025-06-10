import React, { forwardRef } from "react";
import "./Input.css";

type InputProps = {
  type?: string;
  label: string;
  placeholder?: string;
  value?: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showRequired?: boolean;
  inputClassName?: string;
  multiple?: boolean;
};

// Use forwardRef to allow parent to control file input
const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      type = "text",
      name,
      value,
      multiple = false,
      showRequired = false,
      inputClassName,
      ...props
    },
    ref
  ) => {
    return (
      <div>
        {label && (
          <label className="label">
            {label}
            {showRequired && <span className="required-star">* (required)</span>}
          </label>
        )}
        <input
          ref={ref}
          type={type}
          name={name}
          value={value}
          multiple={multiple}
          className={`input ${inputClassName}`}
          {...props}
        />
      </div>
    );
  }
);

export default Input;
