import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import "../styles/Layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="Main__content">
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
