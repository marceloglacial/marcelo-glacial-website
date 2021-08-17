import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>
          Marcelo Glacial - Front-End Developer, Web Developer and Web Designer
        </title>
        <link
          crossOrigin='anonymous'
          href='https://fonts.googleapis.com/css?family=Montserrat:200,700'
          rel='stylesheet'
        />
      </Head>
      <main>{children}</main>
    </>
  );
}
