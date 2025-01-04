import { Benefits } from "../components/Benefits";
import { Departaments } from "../components/Departaments";
import { Image } from "../components/Image";
import { Recomendations } from "../components/Recomendations";
import { SecondSection } from "../components/SecondSection";
import { SectionMain } from "../components/SectionMain";
import { Visit } from "../components/Visit";

export const HomeView: React.FC = () => {
  return (
    <>
      <SectionMain />
      <Departaments />
      <Image />
      <SecondSection />
      <Recomendations />
      <Benefits />
      <Visit />
    </>
  );
};
