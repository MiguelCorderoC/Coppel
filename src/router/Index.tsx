import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeView } from "../views/HomeView";
import { Banner } from "../components/Banner";
import { Menu } from "../components/Menu";
import { Delivery } from "../components/Delivery";
import { ChatHelp } from "../components/ChatHelp";

export const Index: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Banner text="Navidad millonaria tiene increibles premios" link="#" />
        <Menu />
        <Delivery />
        <main className="bg-gray-100 px-3 py-2 space-y-5">
          <Routes>
            <Route path="/" element={<HomeView />} />
          </Routes>
        </main>
        <ChatHelp />
      </BrowserRouter>
    </>
  );
};
