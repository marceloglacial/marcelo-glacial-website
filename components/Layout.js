import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>
          Marcelo Glacial - Front-End Developer, Web Developer and Web Designer
        </title>
        <meta name='robots' content='index, follow' />
        <meta
          name='description'
          content='Marcelo Glacial - Front-End Developer and Web Designer'
        />
        <meta
          name='keywords'
          content='Photoshop, Sketch, Front-End, Webdesign, Webdesigner, Web Developer, Git, JS, Bootstrap, React, NextJS, Next JS'
        />
        <link
          crossOrigin='anonymous'
          href='https://fonts.googleapis.com/css?family=Montserrat:200,700&display=swap'
          rel='stylesheet'
        />

        <meta property='og:title' content='Marcelo Glacial' />
        <meta
          property='og:description'
          content='Front-End Developer and Web Designer'
        />
        <meta property='og:image' content='tile-wide.png' />
        <link rel='apple-touch-icon' href='apple-touch-icon.png' />
      </Head>
      <main>{children}</main>
    </>
  );
}
