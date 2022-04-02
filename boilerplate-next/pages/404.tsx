import type { NextPage } from 'next';
import Layout from '@components/Layout/Layout';

const NotFound: NextPage = () => {
  return (
    <Layout>
      <section className="not-found">
        <h1>Custom 404!</h1>
        <p>Not found!</p>
      </section>
    </Layout>
  );
};

export default NotFound;
