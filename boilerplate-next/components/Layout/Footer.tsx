import type { NextPage } from 'next';

const Footer: NextPage<
  Readonly<{
    foo: boolean;
  }>
> = ({ foo }) => {
  return (
    <footer>
      <p className="text-center">
        <span dangerouslySetInnerHTML={{ __html: '&copy;' }} />{' '}
        {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
