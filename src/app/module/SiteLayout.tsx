/**
 * Author: Pernilla Stalbring Solino-Moreno
 * Date: Jun 2023
 *
 * This is file is layout for my site layout page
 */
import { Outlet } from "react-router-dom";
import Style from "./SiteLayoutStyle.module.css";
import SiteNav from "./SiteNav";
import AdminUserList from "./AdminFolder/AdminUserList";

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
        <AdminUserList />
        <main>
          {/*Outlet does: whatever route (in App.tsx) is match it will render in this location*/}
          <Outlet />
        </main>
      </section>
    </>
  );
};

export default SiteLayout;
