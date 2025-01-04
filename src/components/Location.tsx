import { IoIosArrowDown } from "react-icons/io";
import { useLocationStore } from "../store/locationStore";
import { CitiesButton } from "./CitiesButton";

export const Location: React.FC = () => {
  const locationStore = useLocationStore((state) => state);
  return (
    <>
      <section className="px-4 fixed h-screen top-0 flex items-center justify-center z-10">
        <article className="border rounded-lg px-4 py-5 space-y-5 bg-white shadow">
          <div className="flex justify-between items-end">
            <h2 className="font-semibold text-xl">Ciudad de entrega</h2>
            <button
              onClick={() => {
                locationStore.setVisible(false);
              }}
              className="text-gray-500 font-bold text-xl"
            >
              X
            </button>
          </div>
          <p>
            Para mostrarte{" "}
            <span className="font-semibold">
              Productos disponibles elige donde seta tu entrega
            </span>
          </p>
          <div className="flex flex-col gap-2">
            <label>Selecciona estado</label>
            <CitiesButton>
              CIUDAD DE MEXICO
              <IoIosArrowDown className="text-2xl text-gray-400" />
            </CitiesButton>
          </div>
          <div className="flex flex-col gap-2">
            <label>Selecciona ciudad</label>
            <CitiesButton disabled>
              IZTAPALAPA
              <IoIosArrowDown className="text-2xl text-gray-400" />
            </CitiesButton>
          </div>
          <div className="flex flex-col gap-3 font-semibold">
            <button className="rounded-full bg-gray-300 py-3">Guardar</button>
            <button className="rounded-full border text-[#0266ae] border-[#0266ae] py-3">
              Lo hare despues
            </button>
          </div>
        </article>
      </section>
    </>
  );
};
