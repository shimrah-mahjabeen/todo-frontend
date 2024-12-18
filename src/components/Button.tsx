import React from "react";

interface ButtonProps {
  label: string;
  icon?: React.ReactNode; // Icon component
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void; // Updated for React event
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  icon,
  onClick,
  type = "button",
  disabled = false,
}) => {
  // Base styles for the button
  const baseStyles =
    "flex items-center justify-center gap-2 my-[-24] p-4 w-1/2 mx-4 font-bold rounded-md shadow text-white transition-all duration-300 focus:outline-none focus:ring bg-[#1E6F9F] hover:bg-cyan-700 focus:ring-cyan-300 z-40";

  const disabledStyles = "opacity-50 cursor-not-allowed";

  return (
    <button
      type={type}
      onClick={onClick} // Now compatible with events
      disabled={disabled}
      className={`${baseStyles} ${disabled ? disabledStyles : ""}`}
    >
      <span>{label}</span>
      {icon && <span className="flex items-center">{icon}</span>}
    </button>
  );
};

export default Button;
