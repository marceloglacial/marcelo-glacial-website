const HeroIcons = (props) => {
  const { icons } = props;

  if (!icons || icons.length === 0) return null;

  const iconsList = icons.map((item, index) => {
    const { title, icon, url } = item;
    return (
      <li key={index} className={`pl-4`}>
        <a href={url}>{title}</a>
      </li>
    );
  });

  return <ul className={`hero__icons flex justify-end`}>{iconsList}</ul>;
};
export default HeroIcons;
