import { Link } from "react-router-dom";
import { Input } from "./ui/Input";

export const SignInForm: React.FC = () => {
  return (
    <article className="space-y-5">
      <h2 className="text-3xl font-semibold">
        Crea tu cuenta. <br />
        Asi, todo es mas facil
      </h2>
      <div className="border rounded shadow space-y-3 p-4">
        <div className="flex gap-1">
          <Input placeholder="Nombres(s)*" />
          <Input placeholder="Apellidos*" />
        </div>
        <Input placeholder="Correo electronico o celular*" />
        <Input placeholder="Crear mi contraseña*" />
        <div className="flex gap-2 items-start">
          <input type="checkbox" className="mt-1" />
          <span>
            He leído y acepto los Términos y condiciones y el Aviso de
            privacidad.
          </span>
        </div>
        <div className="flex gap-2 items-start">
          <input type="checkbox" className="mt-1" />
          <span>
            Quiero recibir ofertas y promociones en mi correo electrónico y
            celular.
          </span>
        </div>
        <button className="bg-[#59a1d1] w-full rounded-sm text-white py-3 text-sm font-medium">
          Crea tu cuenta
        </button>
        <div className="flex justify-center gap-1">
          <span>¿Ya tienes tu cuenta?</span>
          <Link to={"/login"} className="text-blue-400">
            Inicia sesion
          </Link>
        </div>
      </div>
    </article>
  );
};
