import { TiLocation } from "react-icons/ti";
import { IoIosArrowDown } from "react-icons/io";
import { useLocationStore } from "../store/locationStore";
import { Location } from "./Location";

export const Delivery: React.FC = () => {
  const locationStore = useLocationStore((state) => state);

  return (
    <>
      <button
        onClick={() => {
          locationStore.setVisible(true);
        }}
        className="flex items-center justify-between p-3 w-full md:hidden"
      >
        <div className="flex items-center gap-2">
          <TiLocation
            className={`text-xl ${
              locationStore.delivery == "" ? "text-red-500" : "text-[#0266ae]"
            }
            `}
          />
          <span className="text-sm">
            {locationStore.delivery == ""
              ? "Elige tu ciudad de entrega"
              : locationStore.delivery}
          </span>
        </div>
        <IoIosArrowDown className="text-2xl text-[#0266ae]" />
      </button>
      {locationStore.visible && <Location />}
    </>
  );
};
