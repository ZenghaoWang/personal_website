import { TypographyStyle, GoogleFont } from "react-typography";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import styles from "./Layout.module.scss";
import Head from "next/head";
import typography from "../../styles/typography";

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      {/* <head>
        <TypographyStyle typography={typography} />
        <GoogleFont typography={typography} />
      </head> */}
      <Navbar />
      <div className={styles.container}>
        {children}
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
