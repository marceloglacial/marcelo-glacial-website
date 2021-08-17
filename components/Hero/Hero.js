import HeroDescription from './HeroDescription';
import HeroIcons from './HeroIcons';
import HeroImage from './HeroImage';
import HeroTitle from './HeroTitle';

const Hero = (props) => {
  const { title, description, image, icons } = props;

  return (
    <section
      className={`hero h-screen w-full flex items-center justify-end relative`}
    >
      <HeroImage image={image} />
      <article
        className={`p-8 text-white text-right bg-red-600 mr-16 relative z-10 w-2/6`}
      >
        <HeroTitle title={title} />
        <HeroDescription description={description} />
        <HeroIcons icons={icons} />
      </article>
    </section>
  );
};
export default Hero;
