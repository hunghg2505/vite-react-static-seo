import React from 'react';

import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

interface IPropsAbout {}

const About = (props: IPropsAbout) => {
  return (
    <>
      <Helmet>
        <title>About</title>
        <meta name='title' content='Vite React Static SEO' />
        <meta name='description' content='Vite React Static SEO' />

        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://metatags.io/' />
        <meta property='og:title' content='Vite React Static SEO' />
        <meta property='og:description' content='Vite React Static SEO' />
        <meta property='og:image' content='https://vitejs.dev/logo-with-shadow.png' />

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://metatags.io/' />
        <meta property='twitter:title' content='Vite React Static SEO' />
        <meta property='twitter:description' content='Vite React Static SEO' />
        <meta property='twitter:image' content='https://vitejs.dev/logo-with-shadow.png' />
      </Helmet>

      <h1>Hello About</h1>

      <div>
        <Link to={'/'}>About</Link>
      </div>
    </>
  );
};

export default About;
