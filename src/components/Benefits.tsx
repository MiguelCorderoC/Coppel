import { TbTruckDelivery } from "react-icons/tb";
import { BsPatchCheck } from "react-icons/bs";
import { GiAlliedStar } from "react-icons/gi";
import { FaAngleRight, FaShieldHalved } from "react-icons/fa6";

export const Benefits: React.FC = () => {
  return (
    <>
      <section className="md:pt-6">
        <article className="relative flex justify-center">
          <span className="bg-[#fedc01] md:flex md:gap-3 md:items-center text-[#006fb9] md:-top-10 md:py-3 md:px-5 md:rounded-full -top-7 w-[90%] md:w-fit absolute rounded-lg font-bold text-2xl py-1 text-center">
            Beneficios de comprar en <br className="md:hidden" /> Coppel.com{" "}
            <FaAngleRight className="hidden md:block mt-1" />
          </span>
        </article>
        <article className="border bg-white rounded-xl shadow p-7 pt-14 md:pt-7">
          <ul className="text-3xl md:text-5xl flex flex-col gap-8 text-[#006fb9] pl-5 md:flex-row md:justify-around">
            <li className="flex items-center gap-3">
              <TbTruckDelivery />
              <span className="text-base text-black">Envio seguro</span>
            </li>
            <li className="flex items-center gap-3">
              <BsPatchCheck />
              <span className="text-base text-black">
                Hasta 2 años de garantia
              </span>
            </li>
            <li className="flex items-center gap-3">
              <GiAlliedStar />
              <span className="text-base text-black">Productos exclusivos</span>
            </li>
            <li className="flex items-center gap-3">
              <FaShieldHalved />
              <span className="text-base text-black">
                Compra facil y segura
              </span>
            </li>
          </ul>
        </article>
      </section>
    </>
  );
};
