import { useEffect, useRef, useState } from "react";
import { PhotoSlideDb } from "../db/PhotoSlideDb";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

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
    <article className="space-y-6 relative pb-3 md:flex md:flex-col md:items-center">
      <div
        ref={slideRef}
        className="overflow-hidden flex items-center md:w-[900px] rounded-xl"
      >
        {PhotoSlideDb.map((item, index) => (
          <img key={index} src={item} alt="" className="w-full flex-shrink-0" />
        ))}
        {count != 0 && (
          <button
            onClick={() => {
              setCount(count - 1);
            }}
            className="hidden bg-white left-2 h-16 w-16 absolute rounded-full md:flex items-center justify-center border border-[#0266ae]"
          >
            <FaAngleLeft className="text-[#0266ae] text-xl" />
          </button>
        )}
        {count != PhotoSlideDb.length - 1 && (
          <button
            onClick={() => {
              setCount(count + 1);
            }}
            className=" bg-white hidden right-2 h-16 w-16 absolute rounded-full md:flex items-center justify-center border border-[#0266ae]"
          >
            <FaAngleRight className="text-[#0266ae] text-xl" />
          </button>
        )}
      </div>
      <div className="flex justify-center gap-4">
        {PhotoSlideDb.map((_, index) => (
          <button
            key={index}
            onClick={() => setCount(index)}
            className={`h-2 w-2 rounded-full md:h-4 md:w-4 ${
              count === index ? "bg-[#0266ae]" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </article>
  );
};
