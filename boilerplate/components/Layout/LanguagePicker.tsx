import React from 'react';
import type { NextPage } from 'next';
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

const LanguagePicker: NextPage = () => {
  const { push, pathname, locales, locale } = useRouter();

  const switchLanguage = (e: React.SyntheticEvent<HTMLSelectElement>) => {
    const newLanguage = e.currentTarget.value;
    const url = newLanguage === 'en' ? pathname : `/${newLanguage}${pathname}`;
    push(url);
  };

  return (
    <Select
      options={getLanguageDropdownOptions(locales)}
      onChange={switchLanguage}
      defaultValue={locale}
      className="dark:text-black"
    />
  );
};

export default LanguagePicker;
