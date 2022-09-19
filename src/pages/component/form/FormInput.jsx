import { useState } from "react";
import "./formInput.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      <label className="labelInput">{label}</label>
      <input className="inputEffect" {...inputProps} onChange={onChange} onBlur={handleFocus} focused={focused.toString()} />
      <span className="spanEffect">{errorMessage}</span>
    </div>
  );
};

export default FormInput;
