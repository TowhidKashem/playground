import type { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Layout from '@components/Layout/Layout';

const UsersIndex: NextPage = () => {
  const { t } = useTranslation('users');

  return (
    <Layout>
      <section className="relative min-h-[30rem]">
        <h1>{t('all_users')}</h1>

        <p>...</p>
      </section>
    </Layout>
  );
};

export async function getServerSideProps({ locale }) {
  const translations = await serverSideTranslations(locale, [
    'common',
    'users'
  ]);

  return {
    props: {
      ...translations
    }
  };
}

export default UsersIndex;
