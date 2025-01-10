import { FaAngleDown, FaRegAddressCard, FaStore } from "react-icons/fa6";
import { MdDiscount } from "react-icons/md";
import { Link } from "react-router-dom";

export const MenuDowns: React.FC = () => {
  return (
    <article className="hidden md:flex justify-between py-4">
      <ul className="flex gap-5 text-lg font-medium ">
        <li>
          <button className="flex items-center gap-2 pl-7">
            <FaStore className="text-[#0266ae]" /> Departamentos{" "}
            <FaAngleDown className="text-[#0266ae]" />
          </button>
        </li>
        <li>
          <button className="flex items-center gap-2 text-red-600">
            <MdDiscount /> Ofertas <FaAngleDown />
          </button>
        </li>
        <li>
          <button className="flex items-center gap-2">
            <FaRegAddressCard className="text-[#0266ae]" /> Servicios{" "}
            <FaAngleDown className="text-[#0266ae]" />
          </button>
        </li>
      </ul>
      <ul className="flex font-medium gap-5 pr-5">
        <li>
          <Link to={"#"}>Ubica tu tienda</Link>
        </li>
        <li>
          <Link to={"#"}>Sigue tus pedidos</Link>
        </li>
        <li>
          <Link to={"#"}>Ayuda</Link>
        </li>
      </ul>
    </article>
  );
};
