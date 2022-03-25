import type { NextPage } from 'next';
import { useEffect } from 'react';

const FragileComponent: NextPage = () => {
  useEffect(() => {
    throw new Error('foo');
  }, []);

  return (
    <section>
      <p>Do I work?</p>
    </section>
  );
};

export default FragileComponent;
