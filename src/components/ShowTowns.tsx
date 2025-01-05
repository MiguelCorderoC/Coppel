import { TownsDb } from "../db/Data";
import { useLocationStore } from "../store/locationStore";

export const ShowTowns: React.FC = () => {
  const locationStore = useLocationStore((state) => state);

  return (
    <section className="fixed w-full flex justify-center items-center h-screen">
      <article className="bg-white border rounded-lg shadow w-[95%] p-5">
        <div className="flex justify-between items-center">
          <button
            onClick={() => {
              locationStore.setShowState(false);
            }}
            className="font-semibold text-[#0266ae]"
          >
            Volver
          </button>
          <button
            onClick={() => {
              locationStore.setShowState(false);
            }}
            className="font-semibold text-[#0266ae]"
          >
            X
          </button>
        </div>
        <h2 className="font-semibold text-lg">Elige una ciudad</h2>
        <ul className=" overflow-y-auto h-[450px]">
          {TownsDb.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => {
                  locationStore.setState(item);
                  locationStore.setShowState(false);
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
