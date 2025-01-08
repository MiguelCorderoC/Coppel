import { useEffect, useState } from "react";
import { DepartamentsDb } from "../db/Data";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

type DepartamentsType = {
  photo: string;
  name: string;
  discount: string;
};

export const Departaments: React.FC = () => {
  const [showAll, setShowAll] = useState<boolean>(false);
  const [departaments, setDepartaments] = useState<DepartamentsType[]>([]);

  useEffect(() => {
    showAll
      ? setDepartaments(DepartamentsDb)
      : setDepartaments(DepartamentsDb.slice(0, 7));
  }, [showAll]);

  return (
    <section className="space-y-2">
      <h2 className="font-semibold text-2xl md:text-3xl md:font-bold">
        Todos los departamentos
      </h2>
      <article className="flex flex-wrap justify-center text-[8px] gap-1 md:gap-5">
        {departaments.map((item, index) => (
          <div
            key={index}
            className="text-center hover:border-[#0266ae] cursor-pointer transition duration-200 md:text-xs md:px-3 md:py-1 bg-white border rounded-xl shadow w-[24%] md:w-[11%] h-28 md:h-40 flex flex-col items-center justify-around"
          >
            <div className="flex flex-col items-center gap-2">
              <img src={item.photo} alt="" className="md:size-12" />
              <span>{item.name}</span>
            </div>
            <span className="bg-red-100 text-red-500 p-1 rounded">
              {item.discount}
            </span>
          </div>
        ))}
        <button
          onClick={() => {
            setShowAll((prev) => !prev);
          }}
          className="w-[24%] md:px-0.5 md:w-[11%] flex gap-2 flex-col items-center justify-center bg-[#0266ae] rounded-xl text-white"
        >
          {showAll ? (
            <FaAngleUp className="text-xl" />
          ) : (
            <FaAngleDown className="text-xl" />
          )}
          <span className="text-center md:text-base">
            {showAll ? "Ver menos" : "Todos los departamentos"}
          </span>
        </button>
      </article>
    </section>
  );
};
