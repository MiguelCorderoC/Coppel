import { SectionMainDb } from "../db/Data";
import { PhotoSlide } from "./PhotoSlide";

export const SectionMain: React.FC = () => {
  return (
    <>
      <section className="space-y-2 md:flex gap-6">
        <PhotoSlide />
        <article className="space-y-2 md:space-y-6">
          {SectionMainDb.map((item, index) => (
            <img
              key={index}
              src={item}
              alt=""
              className="rounded-xl md:h-[210px] md:-mt-1"
            />
          ))}
        </article>
      </section>
    </>
  );
};
