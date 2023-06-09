import { NavLink } from "react-router-dom";
import Style from "./SiteNavStyle.module.css";

const SiteLayout = () => {
  return (
    <nav className={Style.container}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/List">Books</NavLink>
      <NavLink to="/add">Bookadd</NavLink>
    </nav>
  );
};
export default SiteLayout;

/*<nav
  style={{
    width: 200,
    display: "flex",
    justifyContent: "space-evenly",
  }}
>
  <NavLink to="/" end>
    Home
  </NavLink>
  <NavLink to="/list">Books</NavLink>
  <NavLink to="/add">Bookadd</NavLink>
</nav>;*/
