import Hero from '../components/Hero';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <Hero title={`Hero Title`} description={`Front-end Developer`} />
    </Layout>
  );
}
