import Hero from '../components/Hero/Hero';
import Layout from '../components/Layout';

export default function Home() {
  const data = {
    title: 'Marcelo <br />Glacial',
    description: 'Web Developer',
    image: {
      src: `https://res.cloudinary.com/dw2wjwhuv/image/upload/v1629224461/marceloglacial/background_temzsr.png`,
      alt: `Photo of Marcelo Glacial using sunglasses`,
    },
    icons: [
      {
        title: 'GitHub',
        icon: 'github',
        url: 'https://github.com/marceloglacial',
      },
      {
        title: 'LinkedIn',
        icon: 'linkedin',
        url: 'https://www.linkedin.com/in/glacial',
      },
    ],
  };

  return (
    <Layout>
      <Hero
        title={data.title}
        description={data.description}
        image={data.image}
        icons={data.icons}
      />
    </Layout>
  );
}
