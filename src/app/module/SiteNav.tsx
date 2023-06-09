/**
 * Author: Pernilla Stalbring Solino-Moreno
 * Date: Jun 2023
 *
 * This file is a for thathopfully controll my navigation.
 */
import { NavLink } from "react-router-dom";
import Style from "./SiteNavStyle.module.css";

/*new cleaner code does quit the same as the code below*/
const SiteLayout = () => {
  const navLinks = [
    {
      id: "1",
      to: "/",
      value: "Home",
    },
    {
      id: "2",
      to: "/List",
      value: "Books",
    },
    {
      id: "3",
      to: "/Add",
      value: "Add",
    },
  ];
  return (
    <nav className={Style.container}>
      {navLinks.map((link) => {
        return (
          <NavLink
            key={link.id}
            to={link.to}
            end
            className={({ isActive }) => (isActive ? Style.active : undefined)}
          >
            {link.value}
          </NavLink>
        );
      })}
    </nav>
  );

  /* return (
    <nav className={Style.container}>
      {/*when the link isActive it will do css changes */
  /*} <NavLink
        to="/"
        end
        className={({ isActive }) => (isActive ? Style.active : undefined)}
      >
        Home
      </NavLink>
      <NavLink
        to="/List"
        className={({ isActive }) => (isActive ? Style.active : undefined)}
      >
        Books
      </NavLink>
      <NavLink
        to="/add"
        className={({ isActive }) => (isActive ? Style.active : undefined)}
      >
        Bookadd
      </NavLink>
 </nav>
 );*/
};
export default SiteLayout;
