import Image from 'next/image';

const Hero = (props) => {
  const { title, description, image } = props;

  return (
    <section
      className={`hero h-screen w-full flex items-center justify-end bg-black relative`}
    >
      {image && (
        <div className={`hero__image absolute h-screen w-screen top-0 left-0`}>
          <Image src={image?.src} alt={image?.alt} layout={'fill'} />
        </div>
      )}
      <article className={`p-8 text-white bg-red-600 mr-16 relative z-10`}>
        {title && (
          <header>
            <h1
              className={`text-8xl tracking-tightest font-bold m-0 leading-close`}
              dangerouslySetInnerHTML={{ __html: title }}
            />
          </header>
        )}
        {description && (
          <p
            className={`text-2xl tracking-tight`}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
      </article>
    </section>
  );
};
export default Hero;
