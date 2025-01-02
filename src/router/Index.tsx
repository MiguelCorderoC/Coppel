import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeView } from "../views/Homeview";
import { Banner } from "../components/Banner";
import { Menu } from "../components/Menu";
import { Delivery } from "../components/Delivery";

export const Index: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Banner text="Navidad millonaria tiene increibles premios" link="#" />
        <Menu />
        <Delivery />
        <Routes>
          <Route path="/" element={<HomeView />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
