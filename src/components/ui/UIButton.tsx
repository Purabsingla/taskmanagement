import React from "react";
import "../../css/Button.css";

interface ButtonProps {
  setToggleButton: React.Dispatch<React.SetStateAction<boolean>>;
}

const Button: React.FC<ButtonProps> = ({ setToggleButton }) => {
  return (
    <button
      className="btn"
      onClick={() => setToggleButton((prev) => !prev)} // 🔥 Fix: Toggle state correctly
    >
      Add Tasks
    </button>
  );
};

export default Button;
