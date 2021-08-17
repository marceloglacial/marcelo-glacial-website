import Image from 'next/image';

const HeroImage = (props) => {
  const { image } = props;

  if (!image?.src) return null;

  const { src, alt } = image;
  return (
    <div className={`hero__image absolute h-screen w-screen top-0 left-0`}>
      <Image src={src} alt={alt} layout={'fill'} className={`object-cover`} />
    </div>
  );
};
export default HeroImage;
