const HeroDescription = (props) => {
  const { description } = props;

  if (!description) return null;

  return (
    <p
      className={`text-2xl tracking-tight`}
      dangerouslySetInnerHTML={{ __html: description }}
    />
  );
};
export default HeroDescription;
