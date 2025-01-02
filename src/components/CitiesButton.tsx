import React from "react";

interface CitiesButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const CitiesButton: React.FC<CitiesButtonProps> = (props) => {
  return (
    <button
      {...props}
      className="border p-3 rounded flex justify-between"
    ></button>
  );
};
