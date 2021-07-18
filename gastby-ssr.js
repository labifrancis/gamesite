import React from 'react';
import Layout from './src/components/Layout';

// eslint-disable-next-line no-unused-vars
function wrapPageElement({ element, props }) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Layout {...props}>
      <p>{element}</p>
    </Layout>
  );
}
