import type { NextPage, GetServerSideProps } from 'next';
import Layout from '@components/Layout/Layout';

const CategoryDetail: NextPage<
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

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { category, page } = params;

  // fetch call here...

  return {
    props: {
      foo: 'caregory detail'
    }
  };
};

export default CategoryDetail;
