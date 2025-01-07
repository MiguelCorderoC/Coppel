import { BrowserRouter } from "react-router-dom";
import { Index } from "./router/Index";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Index />
      </BrowserRouter>
    </>
  );
};

export default App;
