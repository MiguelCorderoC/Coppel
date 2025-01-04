import { RecomendationsDb } from "../db/Data";

export const Recomendations: React.FC = () => {
  return (
    <>
      <section className="space-y-3">
        <h2 className="font-semibold text-2xl">Recomendados para ti</h2>
        <div className="flex overflow-auto gap-2">
          {RecomendationsDb.map((item, index) => (
            <article
              key={index}
              className="bg-white border rounded-lg min-w-[250px] p-3 space-y-2"
            >
              <img src={item.photo} alt="" className="rounded-t-lg" />
              <div className="flex-col flex items-start">
                <span className="bg-red-100 text-red-500 rounded p-0.5 text-sm">
                  Oferta
                </span>
                <span>{item.name}</span>
                <span className="text-gray-500">Precio de contado</span>
                <div className="space-x-10">
                  <span className="text-red-600 font-bold text-lg">
                    {item.price}
                  </span>
                  <span className="text-gray-500 line-through text-sm">
                    {item.discount}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};
