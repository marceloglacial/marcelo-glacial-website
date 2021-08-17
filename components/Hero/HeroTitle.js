const HeroTitle = (props) => {
  const { title } = props;

  if (!title) return null;

  return (
    <header>
      <h1
        className={`text-8xl tracking-tightest font-bold leading-close`}
        dangerouslySetInnerHTML={{ __html: title }}
      />
    </header>
  );
};
export default HeroTitle;
