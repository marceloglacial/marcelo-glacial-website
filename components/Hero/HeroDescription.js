const HeroDescription = (props) => {
  const { description } = props;

  if (!description) return null;

  const styles = `tracking-tight py-3 leading-5`;
  const stylesSmall = `sm:text-2xl `;

  return (
    <p
      className={`${styles} ${stylesSmall}`}
      dangerouslySetInnerHTML={{ __html: description }}
    />
  );
};
export default HeroDescription;
