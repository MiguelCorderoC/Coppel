import { IoIosArrowDown } from "react-icons/io";
import { useLocationStore } from "../store/locationStore";
import { CitiesButton } from "./CitiesButton";
import { ShowState } from "./ShowState";
import { ShowTowns } from "./ShowTowns";
import { useEffect, useState } from "react";

export const Location: React.FC = () => {
  const locationStore = useLocationStore((state) => state);
  const [disableSave, setDisableSave] = useState<boolean>(true);

  useEffect(() => {
    locationStore.city == "Selecciona un estado" &&
    locationStore.state == "Selecciona una ciudad"
      ? setDisableSave(true)
      : setDisableSave(false);
  }, [locationStore.city, locationStore.state]);

  return (
    <>
      <section className="px-4 fixed h-screen top-0 flex items-center justify-center z-10">
        {locationStore.showCities && <ShowState />}
        {locationStore.showState && <ShowTowns />}
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
              Productos disponibles elige donde sera tu entrega
            </span>
          </p>
          <div className="flex flex-col gap-2">
            <label>Selecciona estado</label>
            <CitiesButton
              onClick={() => {
                locationStore.setShowCities(true);
              }}
            >
              {locationStore.city}
              <IoIosArrowDown className="text-2xl text-gray-400" />
            </CitiesButton>
          </div>
          <div className="flex flex-col gap-2">
            <label>Selecciona ciudad</label>
            <CitiesButton
              onClick={() => {
                locationStore.setShowState(true);
              }}
            >
              {locationStore.state}
              <IoIosArrowDown className="text-2xl text-gray-400" />
            </CitiesButton>
          </div>
          <div className="flex flex-col gap-3 font-semibold">
            <button
              disabled={disableSave}
              onClick={() => {
                locationStore.setDelivery(
                  locationStore.city + ", " + locationStore.state
                );
                locationStore.setVisible(false);
              }}
              className={`rounded-full py-3 ${
                disableSave ? "bg-gray-300" : "bg-[#0266ae] text-white"
              }`}
            >
              Guardar
            </button>
            <button
              onClick={() => {
                locationStore.setVisible(false);
              }}
              className="rounded-full border text-[#0266ae] border-[#0266ae] py-3"
            >
              Lo hare despues
            </button>
          </div>
        </article>
      </section>
    </>
  );
};
