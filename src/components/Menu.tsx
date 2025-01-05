import coppel from "../assets/coppel.svg";
import { FiShoppingCart } from "react-icons/fi";
import { MenuOptionsMobile } from "./MenuOptionsMobile";
import { useMenuStore } from "../store/menuStore";

export const Menu: React.FC = () => {
  const menuStore = useMenuStore((state) => state);
  return (
    <>
      {menuStore.visible && <MenuOptionsMobile />}
      <nav className="bg-[#ffdd35] p-3 space-y-2 md:hidden">
        <ul className="flex justify-between items-center">
          <li className="flex gap-3 items-center">
            <button
              onClick={() => {
                menuStore.setVisible(true);
              }}
              className="text-[#0266ae] py-0.5 border-t-2 text-xs font-bold border-b-2 border-[#0266ae]"
            >
              Menu
            </button>
            <img src={coppel} alt="Coppel logo" className="w-36" />
          </li>
          <li>
            <FiShoppingCart className="text-[#0266ae] text-2xl" />
          </li>
        </ul>
        <input
          type="text"
          placeholder="Busca tus productos"
          className="w-full px-2 py-1"
        />
      </nav>
    </>
  );
};
