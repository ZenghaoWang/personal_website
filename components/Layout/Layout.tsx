import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
