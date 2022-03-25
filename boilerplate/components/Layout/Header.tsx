import React from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Select, { Option } from '@components/Select/Select';

function getLanguageDropdownOptions(
  locales: string[],
  currentLocale: string
): Option[] {
  const isoLabelMap = {
    en: 'English',
    fr: 'Français',
    es: 'Español'
  };
  const options = locales.map((locale) => ({
    label: isoLabelMap[locale],
    value: locale,
    selected: locale === currentLocale
  }));
  return options;
}

const navItems = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'Posts',
    href: '/posts'
  },
  {
    label: 'Users',
    href: '/users'
  }
];

const Header: NextPage<
  Readonly<{
    foo: boolean;
  }>
> = ({ foo }) => {
  const { push, pathname, locales, locale } = useRouter();

  const switchLanguage = (e: React.SyntheticEvent<HTMLSelectElement>) => {
    const newLanguage = e.currentTarget.value;
    const url = newLanguage === 'en' ? pathname : `/${newLanguage}${pathname}`;
    push(url);
  };

  return (
    <header className="flex">
      <nav>
        <ul className="flex">
          {navItems.map(({ label, href }) => (
            <li key={label} className="mx-3">
              <Link href={href}>
                <a>{label}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <Select
        options={getLanguageDropdownOptions(locales, locale)}
        onChange={switchLanguage}
        className="ml-auto"
      />
    </header>
  );
};

export default Header;
