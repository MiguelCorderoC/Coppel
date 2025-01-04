import { DepartamentsDb } from "../db/Data";
import { FaAngleDown } from "react-icons/fa6";

export const Departaments: React.FC = () => {
  return (
    <>
      <section className="space-y-2">
        <h2 className="font-semibold text-2xl">Todos los departamentos</h2>
        <article className="flex flex-wrap justify-center text-[8px] gap-1">
          {DepartamentsDb.map((item, index) => (
            <div
              key={index}
              className="text-center bg-white border rounded-xl shadow w-[24%] h-28 flex flex-col items-center justify-around"
            >
              <div className="flex flex-col items-center gap-1">
                <img src={item.photo} alt="" />
                <span>{item.name}</span>
              </div>
              <span className="bg-red-200 text-red-600 p-1 rounded">
                {item.discount}
              </span>
            </div>
          ))}
          <div className="w-[24%] flex gap-2 flex-col items-center justify-center bg-[#0266ae] rounded-xl text-white">
            <FaAngleDown className="text-xl" />
            <span className="text-center">
              Descubre todos <br /> los departamentos
            </span>
          </div>
        </article>
      </section>
    </>
  );
};
