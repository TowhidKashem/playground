import React, { useEffect, useContext } from 'react';
import type { NextPage } from 'next';
import Select from '@components/Select/Select';
import { GlobalContext } from '../../pages/_app';

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

const ThemePicker: NextPage = () => {
  const { theme } = useContext(GlobalContext);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      //
    }
  }, []);

  const switchTheme = (e: React.SyntheticEvent<HTMLSelectElement>) => {
    const theme = e.currentTarget.value;
    localStorage.setItem('theme', theme);
  };

  return (
    <>
      <h1>{theme}</h1>
      <Select
        options={themes}
        defaultValue={theme}
        onChange={switchTheme}
        className="mr-5 dark:text-black"
      />
    </>
  );
};

export default ThemePicker;
