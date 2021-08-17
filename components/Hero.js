const Hero = (props) => {
  const heroStyles = {
    // background: `url(https://res.cloudinary.com/dw2wjwhuv/image/upload/v1629214372/marceloglacial/background_pctbhk.jpg) no-repeat`,
  };

  const { title, description } = props;

  const sectionStyles = `hero h-screen w-full flex items-center justify-end bg-black`;
  const articleStyles = `p-8 text-white bg-red-600 mr-16`;
  const titleStyles = `text-8xl tracking-tightest m-0`;
  const descriptionStyles = ``;

  return (
    <section className={sectionStyles}>
      <article className={articleStyles}>
        {title && (
          <header>
            <h1 className={titleStyles}>{title}</h1>
          </header>
        )}
        {description && <p className={descriptionStyles}>{description}</p>}
      </article>
    </section>
  );
};
export default Hero;
