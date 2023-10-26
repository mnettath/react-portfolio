import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <div className="d-flex align-items-left justify-content-left vh-100">
        <Outlet />
        {/* Outlet should bring in the children: About, Portfolio, Resume, Contact */}
      </div>
      <Footer />
    </>
  );
}

export default App;
