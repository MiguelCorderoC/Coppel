import { StatesDb } from "../db/Data";
import { useLocationStore } from "../store/locationStore";

export const ShowState: React.FC = () => {
  const locationStore = useLocationStore((state) => state);

  return (
    <section className="fixed w-full flex justify-center items-center h-screen">
      <article className="bg-white border rounded-lg shadow w-[95%] p-5">
        <div className="flex justify-between items-center">
          <button
            onClick={() => {
              locationStore.setShowCities(false);
            }}
            className="font-semibold text-[#0266ae]"
          >
            Volver
          </button>
          <button
            onClick={() => {
              locationStore.setShowCities(false);
            }}
            className="font-semibold text-xl"
          >
            X
          </button>
        </div>
        <h2 className="font-semibold text-lg">Elige un estado</h2>
        <ul className=" overflow-y-auto h-[450px]">
          {StatesDb.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => {
                  locationStore.setCity(item);
                  locationStore.setShowCities(false);
                }}
                className="border-b w-full text-start py-5"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};
