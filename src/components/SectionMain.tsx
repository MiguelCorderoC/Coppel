import { PhotoSlide } from "./PhotoSlide";

export const SectionMain: React.FC = () => {
  return (
    <>
      <section className="flex flex-col md:flex md:flex-row gap-1 md:gap-7">
        <PhotoSlide />
        <article className="space-y-2 md:space-y-6">
          <img
            src="https://cdn2.coppel.com/images/emarketing/homepage/2025/s02/desktop/D1.jpg?i10c=img.resize(width:350)?iresize=width:535,height:400"
            alt=""
            className="rounded-xl hidden md:block"
          />
          <img
            src="https://cdn2.coppel.com/images/emarketing/homepage/2025/s02/mobile/M1.jpg?iresize=width:720,height:200"
            alt=""
            className="md:hidden rounded-xl"
          />
          <img
            src="https://cdn2.coppel.com/images/emarketing/homepage/2025/s02/desktop/D2.jpg?i10c=img.resize(width:350)?iresize=width:535,height:400"
            alt=""
            className="rounded-xl hidden md:block"
          />
          <img
            src="https://cdn2.coppel.com/images/emarketing/homepage/2025/s02/mobile/M2.jpg?iresize=width:720,height:200"
            alt=""
            className="md:hidden rounded-xl"
          />
        </article>
      </section>
    </>
  );
};
