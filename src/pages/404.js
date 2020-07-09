import React from 'react';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>Whoa!</h2>
        <p>Which way did my page go?</p>
        <a href="/index.js">Let's go back home.</a>
      </header>
    </article>
  </Layout>
);

export default IndexPage;
