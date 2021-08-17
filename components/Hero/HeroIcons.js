import Icon from '../Icon/Icon';

const HeroIcons = (props) => {
  const { icons } = props;

  if (!icons || icons.length === 0) return null;

  const iconsList = icons.map((item, index) => {
    const { title, icon, url } = item;
    return (
      <li
        key={index}
        className={`pl-3 hover:opacity-70 transition duration-500 ease-in-out`}
      >
        <a href={url} title={title}>
          <Icon icon={icon} size={32} />
        </a>
      </li>
    );
  });

  return <ul className={`hero__icons flex justify-end pt-2`}>{iconsList}</ul>;
};
export default HeroIcons;
