export const Image: React.FC = () => {
  return (
    <>
      <article>
        <img
          src="https://cdn2.coppel.com/images/emarketing/homepage/2025/s02/mobile/BannerMedio_S2_mobile.jpg?i10c=img.resize(width:350)?iresize=width:343px,height:130px"
          alt=""
          className="rounded-xl md:hidden"
        />
        <img
          src="https://cdn2.coppel.com/images/emarketing/homepage/2025/s02/desktop/BannerMedio_S2_desktop.jpg?i10c=img.resize(width:350)?iresize=width:1140,height:98"
          alt=""
          className="hidden md:block rounded-xl "
        />
      </article>
    </>
  );
};
