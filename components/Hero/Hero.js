import HeroDescription from './HeroDescription';
import HeroIcons from './HeroIcons';
import HeroImage from './HeroImage';
import HeroTitle from './HeroTitle';

const Hero = (props) => {
  const { title, description, image, icons } = props;

  const sectionStyles = `h-screen w-full flex items-center justify-end relative`;

  const articleStyles = `text-white text-right bg-red-600 relative z-10 p-5 pl-12 mr-5`;
  const articleStylesMedium = `md:p-8 md:mr-8 md:pl-16`;
  const articleStylesLarge = `lg:p-12 lg:mr-12 lg:pl-32`;

  return (
    <section className={`hero ${sectionStyles}`}>
      <HeroImage image={image} />
      <article
        className={`${articleStyles} ${articleStylesMedium} ${articleStylesLarge}`}
      >
        <HeroTitle title={title} />
        <HeroDescription description={description} />
        <HeroIcons icons={icons} />
      </article>
    </section>
  );
};
export default Hero;
