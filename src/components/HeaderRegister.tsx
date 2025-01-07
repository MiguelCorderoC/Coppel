import { Link } from "react-router-dom";

export const HeaderRegister: React.FC = () => {
  return (
    <header className="flex items-center justify-between">
      <img
        src="https://www.coppel.com/images/emarketing/logo.svg"
        alt=""
        className="w-40"
      />
      <Link to={"/"} className="text-blue-900 underline">
        Volver a Coppel.com
      </Link>
    </header>
  );
};
