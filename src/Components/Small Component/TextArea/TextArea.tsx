import React from "react";
import "./TestArea.css";
import "./../../../colorSystem/color.css";
type TextArea = {
  name: string;
  value: string;
  size: number;
  label:string,
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  showRequired?:boolean,
};
const TextArea = ({ name, value, size = 4, onChange,label,showRequired,...props }: TextArea) => {
  return (
    <>
      <label className="label">{label}
        {showRequired && <span className="required-star">* (required)</span>}
      </label>
      <textarea
        name={name}
        value={value}
        className={`textArea`}
        rows={size}
        onChange={onChange}
        {...props}
      />
    </>
  );
};

export default TextArea;
