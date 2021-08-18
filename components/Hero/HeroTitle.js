const HeroTitle = (props) => {
  const { title } = props;

  if (!title) return null;

  const styles = `text-4xl font-bold leading-7 tracking-tighter`;
  const stylesMedium = `md:text-8xl md:tracking-tightest md:leading-close`;
  const stylesLarge = `md:text-9xl lg:leading-large`;

  return (
    <header>
      <h1
        className={`${styles} ${stylesMedium} ${stylesLarge}`}
        dangerouslySetInnerHTML={{ __html: title }}
      />
    </header>
  );
};
export default HeroTitle;
