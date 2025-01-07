interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
export const Input: React.FC<InputProps> = (props) => {
  return (
    <input
      type="text"
      {...props}
      className="border rounded p-2 w-full focus:border-b-[#0266ae] focus:border-b-2 transition duration-300 outline-none"
    />
  );
};
