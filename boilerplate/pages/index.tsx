import React, { useState } from 'react';
import type { NextPage } from 'next';
import { createContext } from 'react';
import { useSpring, a } from '@react-spring/web';
import Layout from '@components/Layout/Layout';
import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary';
import FragileComponent from '@components/FragileComponent';
import styles from './styles.module.css';

export const GlobalContext = createContext<{
  locale: string;
}>(null);

const HomeIndex: NextPage<
  Readonly<{
    locale: string;
  }>
> = ({ locale }) => {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  });

  return (
    <GlobalContext.Provider value={{ locale }}>
      <Layout>
        <section className="home">
          <article className="prose prose-zinc dark:prose-invert lg:prose-xl">
            <h1>Garlic bread with cheese: What the science tells us</h1>
            <p>
              For years parents have espoused the health benefits of eating
              garlic bread with cheese to their children, with the food earning
              such an iconic status in our culture that kids will often dress up
              as warm, cheesy loaf for Halloween.
            </p>
            <p>
              But a recent study shows that the celebrated appetizer may be
              linked to a series of rabies cases springing up around the
              country.
            </p>
            <div
              className={styles.container}
              onClick={() => set((state) => !state)}
            >
              <a.div
                className={`${styles.c} ${styles.back}`}
                style={{ opacity: opacity.to((o) => 1 - o), transform }}
              />
              <a.div
                className={`${styles.c} ${styles.front}`}
                style={{
                  opacity,
                  transform,
                  rotateX: '180deg'
                }}
              />
            </div>
          </article>

          {/* <ErrorBoundary>
            <FragileComponent />
          </ErrorBoundary> */}
        </section>
      </Layout>
    </GlobalContext.Provider>
  );
};

export async function getServerSideProps({ locale }) {
  return {
    props: {
      locale
    }
  };
}

export default HomeIndex;
