import { Link } from "react-router-dom";
import logo from "../assets/coppel.svg";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa6";
import { BsCart } from "react-icons/bs";

export const MenuDesktop: React.FC = () => {
  return (
    <nav className="bg-[#ffdd35] md:flex items-center justify-between gap-14 hidden">
      <article className="flex items-center flex-grow gap-2 pl-7">
        <img src={logo} alt="" className="w-44" />
        <input
          type="text"
          placeholder="Busca tus productos"
          className="flex-grow py-1 placeholder:font-medium px-2 rounded-lg outline-none border hover:border-blue-800 focus:border-blue-800 transition duration-300"
        />
      </article>
      <ul className="font-medium flex">
        <li>
          <button className="flex items-center p-2 h-full gap-2">
            <FaPhoneAlt className="text-2xl" />
            <span className="text-center">
              Comprar ahora <p className="underline">800 220 7735</p>
            </span>
          </button>
        </li>
        <li>
          <button className="flex items-center p-2 h-full gap-2">
            <MdLocationOn className="text-2xl text-red-500" /> Elige tu
            ubicacion <FaChevronDown className="text-[#006fb9]" />
          </button>
        </li>
        <li>
          <button className="flex items-center p-2 h-full gap-2 bg-[#ffea80]">
            Hola, <p> Inicia sesion</p>
            <FaChevronDown className="text-[#006fb9]" />
          </button>
        </li>
        <li>
          <Link to={"#"} className="bg-[#006fb9] flex items-center p-2 h-full">
            <BsCart className="text-white text-4xl" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};
