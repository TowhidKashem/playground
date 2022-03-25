import type { NextPage } from 'next';
import { useState } from 'react';
import Layout from '@components/Layout/Layout';

const CategoryIndex: NextPage<
  Readonly<{
    foo: string;
  }>
> = ({ foo }) => {
  return (
    <Layout>
      <section className="category">
        <h1>{foo}</h1>
        <p>...</p>
      </section>
    </Layout>
  );
};

export async function getServerSideProps() {
  // fetch...

  return {
    props: {
      foo: 'Category Index'
    }
  };
}

export default CategoryIndex;
