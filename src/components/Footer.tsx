import { FaArrowUp } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";

export const Footer: React.FC = () => {
  return (
    <>
      <footer className="text-white bg-[#1d2c38]">
        <article className="bg-[#243444] px-2 flex items-center justify-center gap-3 font-semibold py-2 text-sm">
          <span>Ir arriba</span>
          <FaArrowUp />
        </article>
        <article className="px-2 flex flex-col items-center gap-2 pt-3">
          <span>Compra segura</span>
          <img
            src="https://cdn2.coppel.com/wcsstore/AuroraStorefrontAssetStore/emarketing/homepage/footer/Secure.svg"
            alt=""
          />
        </article>
        <article className="px-2 flex flex-col items-center pt-5 pb-4 gap-1">
          <span className="text-xl">Descarga nuestra App Coppel</span>
          <div className="flex gap-2">
            <img
              src="https://cdn2.coppel.com/wcsstore/AuroraStorefrontAssetStore/emarketing/homepage/footer/Play_store.svg"
              alt=""
            />
            <img
              src="https://cdn2.coppel.com/wcsstore/AuroraStorefrontAssetStore/emarketing/homepage/footer/Apple_Store.svg"
              alt=""
            />
            <img
              src="https://cdn2.coppel.com/wcsstore/AuroraStorefrontAssetStore/emarketing/homepage/footer/Apple_Store.svg"
              alt=""
            />
          </div>
        </article>
        <ul className="bg-[#243444] px-2 font-semibold text-xl space-y-4 py-2">
          <li className="flex justify-between items-center">
            <span>ACERCA DE COPPEL</span> <FaAngleDown />
          </li>
          <li className="flex justify-between items-center">
            <span>ATENCION A CLIENTES</span>
            <FaAngleDown />
          </li>
          <li className="flex justify-between items-center">
            <span>PUBLICACIONES DE COPPEL</span>
            <FaAngleDown />
          </li>
          <li className="flex justify-between items-center">
            <span>DESTACADOS</span>
            <FaAngleDown />
          </li>
          <li className="flex justify-between items-center">
            <span>REDES SOCIALES</span>
            <FaAngleDown />
          </li>
        </ul>
        <div className="px-2 text-center">
          <ul className="space-y-2 py-2">
            <li>Aviso de privacidad</li>
            <li>Terminos y condiciones</li>
            <li>Aviso de no discriminacion</li>
            <li>Seguridad en Coppel.com</li>
            <li>Mapa del sitio</li>
            <li>Coppel Argentina</li>
          </ul>
          <p className="text-xs">
            *Te llamaremos si es necesario para darle seguimiento a tu compra.
            Todos los precios en Coppel.com son en pesos mexicanos e incluyen
            impuestos. Los precios y promociones de nuestro sitio web son
            exclusivos de Coppel.com. Los abonos quincenales, el plazo o el pago
            inicial pueden variar según el margen de crédito y el historial de
            pago de cada cliente. Los quincenales contemplan: 24, 36, 48, 60 o
            72 quincenas para muebles y 24 quincenas para ropa. Los productos de
            Marketplace que lleves con tu crédito Coppel, cuentan con un plazo
            de 24 quincenas y son financiados con Coppel Pay.
          </p>
          <span className="text-xs">
            2025 © Coppel todos los derechos reservados
          </span>
        </div>
      </footer>
    </>
  );
};
