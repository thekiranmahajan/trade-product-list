import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <div className="home">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default App;
