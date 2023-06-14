/**
 * Author: Pernilla Stalbring Solino-Moreno
 * Date: Jun 2023
 *
 * This is file is site layout for my siteNav page.
 */
import { Outlet } from "react-router-dom";
import Style from "./SiteLayoutStyle.module.css";
import SiteNav from "./SiteNav";
/*import AdminUserForm from "./AdminFolder/AdminUserForm";*/

const SiteLayout = () => {
  return (
    <>
      <article className={Style.header}>
        <header>
          <h1>BookStore</h1>
        </header>
      </article>

      <section className={Style["content-section"]}>
        <SiteNav />

        <main>
          {/*Outlet does: whatever route (in App.tsx) is match it will render in this location. It will by default open AdminUserList */}
          <Outlet />
        </main>
      </section>
    </>
  );
};

export default SiteLayout;
