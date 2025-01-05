import { LuCircleUser } from "react-icons/lu";
import { MdDiscount } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { FaAngleRight } from "react-icons/fa6";
import { FaRegAddressCard } from "react-icons/fa";
import { FaStore } from "react-icons/fa";
import logo from "../assets/coppel.svg";
import { useMenuStore } from "../store/menuStore";

export const MenuOptionsMobile: React.FC = () => {
  const menuStore = useMenuStore((state) => state);
  return (
    <section className="bg-white fixed w-full h-screen z-10 top-0">
      <article className="bg-[#ffdd35] flex justify-between px-3">
        <img src={logo} alt="" className="h-10 w-28" />
        <button
          onClick={() => {
            menuStore.setVisible(false);
          }}
          className="font-extralight text-2xl"
        >
          X
        </button>
      </article>
      <article className="bg-[#ffec99] flex gap-3 items-end px-3 py-2">
        <LuCircleUser className="text-4xl" />
        <div className="flex flex-col">
          <span>!Hola!</span>
          <span className="text-[#0266ae]">Iniciar sesion</span>
        </div>
        <span className="text-[#0266ae]">Crear cuenta</span>
      </article>
      <article className="px-3 py-2 border-b">
        <ul className="space-y-4">
          <li>Estado de cuenta</li>
          <li>Solicitar credito coppel</li>
          <li>Conoce como abonar</li>
          <li>Prestamo personal</li>
        </ul>
      </article>
      <article className="px-3 py-3 font-semibold border-b">
        <ul className="space-y-5">
          <li className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FaStore className="text-[#0266ae] text-xl" />
              <span>Departamentos</span>
            </div>
            <FaAngleRight className="text-[#0266ae] text-2xl bg-blue-100 p-1 rounded-full" />
          </li>
          <li className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MdDiscount className="text-red-500 text-xl" />
              <span>Ofertas</span>
            </div>
            <FaAngleRight className="text-red-500 rounded-full p-1 bg-red-100 text-2xl" />
          </li>
          <li className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FaRegAddressCard className="text-[#0266ae] text-xl" />
              <span>Servicios</span>
            </div>
            <FaAngleRight className="text-[#0266ae] rounded-full p-1 text-2xl bg-blue-100" />
          </li>
          <li className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TbTruckDelivery className="text-[#0266ae] text-xl" />
              <span>Sigue tus pedidos</span>
            </div>
            <FaAngleRight className="text-[#0266ae] rounded-full p-1 text-2xl bg-blue-100" />
          </li>
        </ul>
      </article>
      <article className="px-3 py-5">
        <ul className="space-y-4">
          <li>Descarga la App</li>
          <li>Ubica tu tienda</li>
          <li>Preguntas frecuentes</li>
          <li>Aviso de privacidad</li>
          <li>Terminos y condiciones</li>
        </ul>
      </article>
    </section>
  );
};
