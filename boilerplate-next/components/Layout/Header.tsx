import React from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import ThemePicker from './ThemePicker';
import LanguagePicker from './LanguagePicker';

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
        <ThemePicker />
        <LanguagePicker />
      </div>
    </header>
  );
};

export default Header;
