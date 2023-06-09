import Style from "./SiteLayoutStyle.module.css";
import SiteNav from "./SiteNav";

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
        <div>Detta är temp</div>
      </section>
    </>
  );
};

export default SiteLayout;
