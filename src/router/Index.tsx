import { Route, Routes, useLocation } from "react-router-dom";
import { HomeView } from "../views/HomeView";
import { Banner } from "../components/Banner";
import { Menu } from "../components/Menu";
import { Delivery } from "../components/Delivery";
import { ChatHelp } from "../components/ChatHelp";
import { Footer } from "../components/Footer";
import { Survey } from "../components/Survey";
import { SignInView } from "../views/SignInView";

export const Index: React.FC = () => {
  const location = useLocation();

  const isSignInRoute = location.pathname === "/signin";

  return (
    <>
      {!isSignInRoute && (
        <Banner text="Navidad millonaria tiene increibles premios" link="#" />
      )}
      {!isSignInRoute && <Menu />}
      {!isSignInRoute && <Delivery />}
      <main className="bg-gray-100 px-3 py-2 space-y-5">
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="signin" element={<SignInView />} />
        </Routes>
      </main>
      {!isSignInRoute && <Survey />}
      {!isSignInRoute && <ChatHelp />}
      <Footer />
    </>
  );
};
