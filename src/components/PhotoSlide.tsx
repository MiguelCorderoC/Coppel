import { useEffect, useRef, useState } from "react";
import { PhotoSlideDb } from "../db/PhotoSlideDb";

export const PhotoSlide: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const slideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount((prev) => (prev < PhotoSlideDb.length - 1 ? prev + 1 : 0));
    }, 3000);

    return () => clearTimeout(timer);
  }, [count]);

  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.scrollTo({
        left: count * slideRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  }, [count]);

  return (
    <>
      <article className="space-y-2">
        <div ref={slideRef} className="overflow-hidden flex">
          {PhotoSlideDb.map((item, index) => (
            <img
              key={index}
              src={item}
              alt=""
              className="w-full flex-shrink-0 rounded-lg"
            />
          ))}
        </div>
        <div className="flex justify-center gap-4">
          {PhotoSlideDb.map((_, index) => (
            <button
              key={index}
              onClick={() => setCount(index)}
              className={`h-3 w-3 rounded-full ${
                count === index ? "bg-[#0266ae]" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </article>
    </>
  );
};
