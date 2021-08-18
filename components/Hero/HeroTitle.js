const HeroTitle = (props) => {
  const { title } = props;

  if (!title) return null;

  const styles = `text-4xl font-bold leading-7 tracking-tighter`;
  const stylesMedium = `md:text-7xl md:tracking-medium md:leading-medium`;
  const stylesLarge = `lg:text-8xl lg:tracking-tightest lg:leading-close`;

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
