import { Link } from "react-router-dom";
import { Input } from "./ui/Input";

export const LogInForm: React.FC = () => {
  return (
    <section className="border rounded shadow p-4 space-y-3">
      <article className="text-center">
        <h2 className="text-lg font-semibold">¡Hola de nuevo!</h2>
        <span>
          Inicia sesión con tu correo <br /> electrónico o celular
        </span>
      </article>
      <article className="space-y-2">
        <Input placeholder="Correo electronico o celular*" />
        <Input placeholder="Contraseña*" type="password" />
      </article>
      <article className="flex justify-between items-center">
        <div className="space-x-1">
          <input type="checkbox" />
          <label>Recordarme</label>
        </div>
        <Link to={"#"} className="font-medium text-[#0266ae]">
          Actualizar mi contraseña
        </Link>
      </article>
      <button className="w-full bg-[#016db6] text-white py-3 rounded text-sm font-semibold">
        Iniciar sesion
      </button>
      <div className="flex flex-col items-center gap-2">
        <span>¿Eres nuevo en Coppel.com?</span>
        <Link
          to={"/signin"}
          className="w-full text-center border transition duration-300 hover:bg-[#016db6] hover:text-white rounded border-[#016db6] py-3 text-sm font-semibold text-[#016db6]"
        >
          Crea tu cuenta
        </Link>
      </div>
    </section>
  );
};
