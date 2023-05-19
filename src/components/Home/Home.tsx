import React, { useState } from 'react';

import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

interface IPropsHome {}

const Home = (props: IPropsHome) => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='App'>
        <Helmet>
          <title>Home</title>
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
        <div>
          <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
            <img src='/vite.svg' className='logo' alt='Vite logo' />
          </a>
        </div>
        <h1>Vite Reactjs Static SEO</h1>
        <div className='card'>
          <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>

        <div>
          <Link to={'/about'}>About</Link>
        </div>
      </div>
    </>
  );
};

export default Home;
