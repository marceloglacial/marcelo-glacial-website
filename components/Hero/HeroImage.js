const HeroImage = (props) => {
  const { image } = props;

  if (!image?.src) return null;

  const { src, alt } = image;
  return (
    <img
      src={src}
      alt={alt}
      width={1440}
      height={1024}
      className={`hero__image absolute h-screen w-screen top-0 left-0 object-top object-cover`}
      lazy='true'
    />
  );
};
export default HeroImage;
