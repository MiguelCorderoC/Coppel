import { FaAngleRight } from "react-icons/fa6";

export const Brands: React.FC = () => {
  return (
    <section className="space-y-2">
      <h2 className="text-2xl font-semibold">
        Encuentra aqui las mejores marcas
      </h2>
      <article className="bg-white md:flex items-center justify-center gap-8 md:py-5 border shadow rounded-lg py-2 space-y-3">
        <div className="flex justify-center gap-10 md:gap-10">
          <img
            src="https://cdn2.coppel.com/wcsstore/AuroraStorefrontAssetStore/emarketing/homepage/2023/agosto/marcas/Apple.png?iresize=width:56px,height:56px"
            alt=""
            className="h-10 w-14 object-fill md:h-16 md:w-20"
          />
          <img
            src="https://cdn2.coppel.com/wcsstore/AuroraStorefrontAssetStore/emarketing/homepage/2023/agosto/marcas/Nike.png?iresize=width:56px,height:56px"
            alt=""
            className="h-10 w-14 object-fill md:h-16 md:w-20"
          />
          <img
            src="https://cdn2.coppel.com/wcsstore/AuroraStorefrontAssetStore/emarketing/homepage/2023/agosto/marcas/adidas.png?iresize=width:56px,height:56px"
            alt=""
            className="h-10 w-14 object-fill md:h-16 md:w-20"
          />
        </div>
        <div className="flex justify-center gap-10">
          <img
            src="https://cdn2.coppel.com/wcsstore/AuroraStorefrontAssetStore/emarketing/homepage/2023/noviembre/marcas/puma.png?iresize=width:56px,height:56px"
            alt=""
            className="h-10 w-14 object-fill md:h-16 md:w-20"
          />
          <img
            src="https://cdn2.coppel.com/wcsstore/AuroraStorefrontAssetStore/emarketing/marcas/sprites_marcas/American_Eagle_Logo.jpg?iresize=width:56px,height:56px"
            alt=""
            className="h-10 w-14 object-fill md:h-16 md:w-20"
          />
          <img
            src="https://cdn2.coppel.com/wcsstore/AuroraStorefrontAssetStore/emarketing/homepage/2023/agosto/marcas/Samsung.png?iresize=width:56px,height:56px"
            alt=""
            className="h-10 w-14 object-fill md:h-16 md:w-20"
          />
        </div>
        <div className="flex justify-center gap-10">
          <img
            src="https://cdn2.coppel.com/wcsstore/AuroraStorefrontAssetStore/emarketing/homepage/2023/agosto/marcas/Mabe.png?iresize=width:56px,height:56px"
            alt=""
            className="h-10 w-14 object-fill md:h-16 md:w-20"
          />
          <img
            src="https://cdn2.coppel.com/images/emarketing/1stlevel/2022/mayo/electronica-online/marcas/mobile/logo_3.jpg?iresize=width:56px,height:56px"
            alt=""
            className="h-10 w-14 object-fill md:h-16 md:w-20"
          />
          <img
            src="https://cdn2.coppel.com/images/emarketing/homepage/2024/noviembre/marcas/timberland_b.png?iresize=width:56px,height:56px"
            alt=""
            className="h-10 w-14 object-fill md:h-16 md:w-20"
          />
        </div>
      </article>
      <span className="flex justify-end items-center gap-2 md:text-lg text-[#0266ae] font-semibold">
        Descubre todas las marcas <FaAngleRight />
      </span>
    </section>
  );
};
