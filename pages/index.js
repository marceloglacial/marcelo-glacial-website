import Hero from '../components/Hero/Hero';
import Layout from '../components/Layout';

export default function Home() {
  const data = {
    title: 'Marcelo <br />Glacial',
    description: 'Front-end Developer <br />Web Designer',
    image: {
      src: `https://res.cloudinary.com/dw2wjwhuv/image/upload/v1629253198/marceloglacial/background_altd4s.jpg`,
      alt: `Photo of Marcelo Glacial using sunglasses`,
    },
    icons: [
      {
        title: 'Web Developer and Front-end Projects',
        icon: 'github',
        url: 'https://github.com/marceloglacial',
      },
      {
        title: 'Professioal Profile',
        icon: 'linkedin',
        url: 'https://www.linkedin.com/in/glacial',
      },
      {
        title: 'Web Design Projects',
        icon: 'behance',
        url: 'https://www.behance.net/marceloglacial',
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
