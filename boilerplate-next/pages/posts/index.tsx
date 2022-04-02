import type { NextPage } from 'next';
import { useContext } from 'react';
import useSWR from 'swr';
import classNames from 'classnames';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { fetcher, logger } from '@utils/api';
import Layout from '@components/Layout/Layout';
import Card from '@components/Card/Card';
import Icon from '@components/Icon/Icon';

const PostsIndex: NextPage = () => {
  // const { metricsDayRange, setStats } = useContext(LaunchpadAdminContext);

  const { t } = useTranslation('posts');

  const { data, error, isValidating } = useSWR(
    'http://localhost:3000/api/posts',
    fetcher,
    {
      revalidateOnFocus: true,
      use: [logger]
    }
  );

  const isLoading = !error && !data;
  const isError = Boolean(error);
  const isEmpty = data?.length === 0;

  return (
    <Layout>
      <section className="relative min-h-[30rem]">
        <h1 className="mb-5 text-3xl font-bold">{t('latest_posts')}</h1>

        {isLoading ? (
          <Icon
            name="faSpinner"
            size="3x"
            className="absolute inset-1/2"
            spin
          />
        ) : isEmpty ? (
          <Icon
            name="faHourglassEmpty"
            size="3x"
            className="absolute inset-1/2"
          />
        ) : (
          data?.posts.slice(0, 5).map((post: Post) => (
            <Card
              key={post.id}
              post={post}
              className={classNames({
                'bg-flash': isValidating
              })}
            />
          ))
        )}
      </section>
    </Layout>
  );
};

export async function getServerSideProps({ locale }) {
  const translations = await serverSideTranslations(locale, [
    'common',
    'posts'
  ]);

  return {
    props: {
      ...translations
    }
  };
}

export default PostsIndex;
