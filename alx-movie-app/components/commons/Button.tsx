import React from "react";

interface ButtonProps {
  title: string;
  action?: () => void | Promise<boolean>;
}

const Button: React.FC<ButtonProps> = ({ title, action }) => {
  const handleClick = () => {
    if (action) {
      action();
    }
  };

  return (
    <button
      className="bg-[#E2D609] text-black px-6 py-2 rounded-md font-semibold hover:bg-[#c4c208] transition-colors duration-300"
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default Button;
