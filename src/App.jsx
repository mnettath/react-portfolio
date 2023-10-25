import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      <Outlet />
      {/* Outlet should bring in the children: About, Portfolio, Resume, Contact */}

      <Footer />
    </>
  );
}

export default App;
