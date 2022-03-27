import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Select, { Option } from '@components/Select/Select';

function getLanguageDropdownOptions(locales: string[]): Option[] {
  const isoLabelMap = {
    en: 'English',
    fr: 'Français',
    es: 'Español'
  };
  const options = locales.map((locale) => ({
    label: isoLabelMap[locale],
    value: locale
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

const themes = [
  {
    label: 'Light',
    value: 'light'
  },
  {
    label: 'Dark',
    value: 'dark'
  }
];

const Header: NextPage<
  Readonly<{
    foo: boolean;
  }>
> = ({ foo }) => {
  const { push, pathname, locales, locale } = useRouter();

  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, []);

  const switchLanguage = (e: React.SyntheticEvent<HTMLSelectElement>) => {
    const newLanguage = e.currentTarget.value;
    const url = newLanguage === 'en' ? pathname : `/${newLanguage}${pathname}`;
    push(url);
  };

  const switchTheme = (e: React.SyntheticEvent<HTMLSelectElement>) => {
    //
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
      <div className="ml-auto">
        <Select
          options={themes}
          onChange={switchTheme}
          defaultValue={theme}
          className="mr-5 dark:text-black"
        />
        <Select
          options={getLanguageDropdownOptions(locales)}
          onChange={switchLanguage}
          defaultValue={locale}
          className="dark:text-black"
        />
      </div>
    </header>
  );
};

export default Header;
