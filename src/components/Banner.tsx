import { Link } from "react-router-dom";

interface BannerProps {
  text: string;
  link: string;
}

export const Banner: React.FC<BannerProps> = ({ text, link }) => {
  return (
    <>
      <header className="flex flex-col items-center bg-[#5467ef] text-white py-2 space-y-1 md:flex-row md:justify-center md:space-x-4 md:items-center md:space-y-0 ">
        <span>{text}</span>
        <Link
          to={link}
          className="bg-[#ffdd35] text-black rounded-full py-1.5 px-3 font-bold text-[14px]"
        >
          Descubre mas
        </Link>
      </header>
    </>
  );
};
