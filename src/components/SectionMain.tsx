import { SectionMainDb } from "../db/Data";
import { PhotoSlide } from "./PhotoSlide";

export const SectionMain: React.FC = () => {
  return (
    <>
      <section className="space-y-2">
        <PhotoSlide />
        <article className="space-y-2">
          {SectionMainDb.map((item, index) => (
            <img key={index} src={item} alt="" className="rounded-lg" />
          ))}
        </article>
      </section>
    </>
  );
};
