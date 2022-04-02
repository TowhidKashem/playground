import { createContext } from 'react';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import '@styles/globals.scss';

type Theme = 'light | dark';

export const GlobalContext = createContext<{
  theme: Theme;
}>(null);

function App({ Component, pageProps }: AppProps) {
  let theme: Theme = 'light';
  if (typeof window !== 'undefined' && localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }

  return (
    <GlobalContext.Provider
      value={{
        theme
      }}
    >
      <Component {...pageProps} />
    </GlobalContext.Provider>
  );
}

export default appWithTranslation(App);
