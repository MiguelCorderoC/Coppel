import { Route, Routes, useLocation } from "react-router-dom";
import { HomeView } from "../views/HomeView";
import { Banner } from "../components/Banner";
import { Menu } from "../components/Menu";
import { Delivery } from "../components/Delivery";
import { ChatHelp } from "../components/ChatHelp";
import { Footer } from "../components/Footer";
import { Survey } from "../components/Survey";
import { SignInView } from "../views/SignInView";
import { LogInView } from "../views/LogInView";
import { MenuDesktop } from "../components/MenuDesktop";

const routesWithoutComponents: string[] = ["/signin", "/login"];

export const Index: React.FC = () => {
  const location = useLocation();

  const isExcludedRoute = routesWithoutComponents.includes(location.pathname);

  return (
    <>
      {!isExcludedRoute && (
        <>
          <Banner text="Envíos gratis en compras mayores a $499" link="#" />
          <Menu />
          <MenuDesktop />
          <Delivery />
        </>
      )}

      <main className="px-3 py-2 space-y-5 md:px-16 md:py-5">
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/signin" element={<SignInView />} />
          <Route path="/login" element={<LogInView />} />
        </Routes>
      </main>

      {!isExcludedRoute && (
        <>
          <Survey />
          <ChatHelp />
        </>
      )}

      <Footer />
    </>
  );
};
