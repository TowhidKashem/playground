export const fetcher = (url: string) => {
  return fetch(url, {
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  }).then((res) => res.json());
};

export const logger = (useSWRNext) => {
  return (key, fetcher, config) => {
    // Add logger to the original fetcher.
    const extendedFetcher = (...args) => {
      console.log('SWR Request:', key);
      return fetcher(...args);
    };
    // Execute the hook with the new fetcher.
    return useSWRNext(key, extendedFetcher, config);
  };
};
