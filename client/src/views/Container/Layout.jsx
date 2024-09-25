import styles from "../../utilities/styles";
import LayoutNav from "../Presentational/LayoutNav";
import { Outlet } from "react-router";

function Layout() {
  return (
    <div style={styles.layoutGridContainer()}>
      <div className="layout-unit">
        <LayoutNav />
      </div>
      <div className="layout-unit">
        <Outlet />
      </div>
    </div>
  );
}
export default Layout;
