import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const LayOut = () => {
  return (
    <main>
      <Nav />
      <Outlet />
      <Footer />
    </main>
  );
};

export default LayOut;
