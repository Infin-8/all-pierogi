import { Link } from "react-router-dom";
import styles from "../../utilities/styles";

const LayoutNav = () => (
  <nav style={styles.layoutNav()}>
    {[
      "Order Online",
      "Menu",
      "Digital Market",
      "Our Story",
      "Contact Us",
      "Reservations",
    ].map((link, i) => (
      <Link key={`nav-item-${i}`} to={link.replace(/\s/g, "-")}>
        {link}
      </Link>
    ))}
  </nav>
);

export default LayoutNav;
