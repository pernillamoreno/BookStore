import Style from "./SiteLayoutStyle.module.css";

const SiteLayout = () => {
  return (
    <>
      <article className={Style.header}>
        <header>
          <h1>BookStore</h1>
        </header>
      </article>

      <section className={Style["content-section"]}>
        <div>Detta är temp</div>
      </section>
    </>
  );
};

export default SiteLayout;
