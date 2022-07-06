//@ts-nocheck
// Alternative to redux, using a custom global state context and rehydrating it on app restart

// Step 1: global context (context/global.ts)
import type { ColorMode, Theme } from 'utils/design-system';
import type { FavoriteItem } from 'screens/Favorites/Favorites';
import type { Photo } from 'screens/Photo/Photo';
import { createContext } from 'react';

type GlobalState = {
  favoriteArticles: Map<string, FavoriteItem>;
  favoritePhotos: Map<string, FavoriteItem>;
  photos: Map<string, Photo>;
  settings: {
    selectedTheme: ColorMode;
  };
};

type GlobalAction = Partial<GlobalState>;

export const globalInitialState: GlobalState = {
  photos: new Map(),
  settings: {
    selectedTheme: null
  }
};

export const globalStateReducer = (
  prevState: GlobalState,
  action: GlobalAction
) => {
  return {
    ...prevState,
    ...action
  };
};

export const GlobalStateContext = createContext<{
  globalState: GlobalState;
  dispatchGlobalState: React.Dispatch<GlobalAction>;
  theme: Theme;
  isPaymentRequired: boolean;
  setIsPaymentRequired: (isPaymentRequired: boolean) => void;
}>(null);

// Step 2: In App.tsx
const [isPaymentRequired, setIsPaymentRequired] = useState(false);
const [globalState, dispatchGlobalState] = useReducer(
  globalStateReducer,
  globalInitialState
);

async function initializeApp() {
  try {
    const [favoriteArticles, favoritePhotos, photos, settings] =
      await Promise.all([
        AsyncStorage.getItem('favoriteArticles'),
        AsyncStorage.getItem('favoritePhotos'),
        AsyncStorage.getItem('photos'),
        AsyncStorage.getItem('settings')
      ]);

    // Hydrate global state from async storage
    dispatchGlobalState({
      favoriteArticles:
        JSON.parse(favoriteArticles, reviver) ??
        globalInitialState.favoriteArticles,
      favoritePhotos:
        JSON.parse(favoritePhotos, reviver) ??
        globalInitialState.favoritePhotos,
      photos: JSON.parse(photos, reviver) ?? globalInitialState.photos,
      settings: JSON.parse(settings) ?? globalInitialState.settings
    });
  } catch (error) {
    // show full page error telling user to quit and reopen the app
  }
}

useEffect(() => {
  initializeApp();
}, []);

// etc...

<GlobalStateContext.Provider
  value={{
    globalState,
    dispatchGlobalState,
    theme,
    isPaymentRequired,
    setIsPaymentRequired
  }}
>
  <App />
</GlobalStateContext.Provider>;
