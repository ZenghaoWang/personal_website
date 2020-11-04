import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import styles from "./Layout.module.scss";

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
