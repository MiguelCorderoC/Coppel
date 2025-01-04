import { TbTruckDelivery } from "react-icons/tb";
import { BsPatchCheck } from "react-icons/bs";
import { GiAlliedStar } from "react-icons/gi";
import { FaShieldHalved } from "react-icons/fa6";

export const Benefits: React.FC = () => {
  return (
    <div>
      <section className="bg-white rounded-xl flex flex-col items-center relative border shadow pb-3">
        <article className="bg-[#ffdd35] text-[#0266ae] font-bold text-2xl text-center w-11/12 rounded-lg absolute -top-6 py-1">
          <h2>Beneficios de comprar en Coppel.com</h2>
        </article>
        <article className="pt-16 w-full space-y-4 pl-16">
          <div className="flex items-center text-sm gap-4">
            <TbTruckDelivery className="text-[#0266ae] text-3xl" />
            <span>Envio seguro</span>
          </div>
          <div className="flex items-center text-sm gap-4">
            <BsPatchCheck className="text-[#0266ae] text-3xl" />
            <span>Hasta 2 años de garantia</span>
          </div>
          <div className="flex items-center text-sm gap-4">
            <GiAlliedStar className="text-[#0266ae] text-3xl" />
            <span>Productos exclusivos</span>
          </div>
          <div className="flex items-center text-sm gap-4">
            <FaShieldHalved className="text-[#0266ae] text-3xl" />
            <span>Compra facil y segura</span>
          </div>
        </article>
      </section>
    </div>
  );
};
