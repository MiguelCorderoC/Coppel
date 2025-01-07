import { CiLock } from "react-icons/ci";
import { CiCreditCard1 } from "react-icons/ci";

export const BenefitsRegister: React.FC = () => {
  return (
    <section className="space-y-5">
      <h2 className="font-semibold text-xl">Beneficios</h2>
      <article className="flex gap-2">
        <CiLock className="text-[#0266ae] text-6xl" />
        <div className="space-y-2">
          <h3 className="font-semibold text-2xl">
            Compras más rápidas y seguras
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="list-disc list-outside">
              Protege tus datos e información de pago.
            </li>
            <li className="list-disc list-outside">
              Revisa el historial de tus compras.
            </li>
            <li className="list-disc list-outside">
              Compra más rápido en tus siguientes visitas.
            </li>
            <li className="list-disc list-outside">
              Guarda tus distintas direcciones de entrega.
            </li>
          </ul>
        </div>
      </article>
      <article className="flex gap-2">
        <CiCreditCard1 className="text-[#0266ae] text-6xl" />
        <div className="space-y-2">
          <h3 className="font-semibold text-2xl">
            Compra en línea con tu crédito Coppel
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="list-disc list-outside">
              Disfruta los beneficios de tu tarjeta Coppel pagando en abonos.
            </li>
            <li className="list-disc list-outside">
              Consulta tu estado de cuenta en línea.
            </li>
            <li className="list-disc list-outside">
              Mantente al tanto de todas nuestras promociones.
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
};
