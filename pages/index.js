import Hero from '../components/Hero/Hero';
import Layout from '../components/Layout';

export default function Home() {
  const data = {
    title: 'Hero <br />Title',
    description: 'Best Site Ever',
    image: {
      // src: `https://res.cloudinary.com/dw2wjwhuv/image/upload/v1629224461/marceloglacial/background_temzsr.png`,
      src: `https://res.cloudinary.com/dw2wjwhuv/image/upload/v1603335442/xx-liu-Gs3sQ3Fdac-unsplash-scaled.jpg`,
    },
  };

  return (
    <Layout>
      <Hero
        title={data.title}
        description={data.description}
        image={data.image}
      />
    </Layout>
  );
}
