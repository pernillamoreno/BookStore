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
      value: "Users",
    },
    {
      id: "2",
      to: "/List",
      value: "Books",
    },
    {
      id: "3",
      to: "/Add",
      value: "Sign in",
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
};
export default SiteLayout;
