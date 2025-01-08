export const SecondSection: React.FC = () => {
  return (
    <>
      <section className="space-y-2 md:flex items-center gap-5">
        <article>
          <img
            src="https://cdn2.coppel.com/images/emarketing/homepage/2025/s01/mobile/M3.jpg?i10c=img.resize(width:450)?iresize=width:330,height:229"
            alt=""
            className="rounded-xl md:hidden"
          />
          <img
            src="https://cdn2.coppel.com/images/emarketing/homepage/2025/s02/desktop/B3.jpg?i10c=img.resize(width:450)?iresize=width:1535,height:792"
            alt=""
            className="hidden md:block rounded-xl"
          />
        </article>
        <article className="space-y-2 md:space-y-0 md:flex md:flex-col gap-5">
          <img
            src="https://cdn2.coppel.com/images/emarketing/homepage/2025/s01/mobile/M4.jpg?i10c=img.resize(width:450)?iresize=width:330,height:165"
            alt=""
            className="rounded-xl md:hidden"
          />
          <img
            src="https://cdn2.coppel.com/images/emarketing/homepage/2025/s02/desktop/B4.jpg?i10c=img.resize(width:450)?iresize=width:746,height:372"
            alt=""
            className="hidden md:block rounded-xl"
          />
          <img
            src="https://cdn2.coppel.com/images/emarketing/homepage/2025/s01/mobile/M5.jpg?i10c=img.resize(width:450)?iresize=width:330,height:165"
            alt=""
            className="rounded-xl md:hidden"
          />
          <img
            src="https://cdn2.coppel.com/images/emarketing/homepage/2025/s02/desktop/B5.jpg?i10c=img.resize(width:450)?iresize=width:746,height:372"
            alt=""
            className="rounded-xl hidden md:block"
          />
        </article>
      </section>
    </>
  );
};
