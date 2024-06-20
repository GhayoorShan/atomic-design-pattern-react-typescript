// src/CustomButton.tsx

import React from "react";

interface CustomButtonProps {
  label: string;
  backgroundColor?: string;
  textColor?: string;
  border?: string;
  borderRadius?: string;
  padding?: string;
  className?: string;

  onClick: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  backgroundColor = "bg-transparent",
  textColor = "text-white",
  border = "border-none",
  borderRadius = "rounded-[38px]",
  padding = "py-2 px-4",
  className = "",
  onClick,
}) => {
  return (
    <button
      className={` rounded  ${backgroundColor} ${textColor} ${border} ${borderRadius} ${className} ${padding} text-[14px] font-normal hover:opacity-75`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default CustomButton;
