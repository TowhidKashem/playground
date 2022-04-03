import Cache from './cache.mjs';

async function request<ResponseT>(
  method: Request['method'],
  url: Request['url'],
  data?: Record<string, any>,
  overrides?: RequestInit
): Promise<ResponseT> {
  try {
    const optionalFields = {};
    if (data) {
      optionalFields['body'] = JSON.stringify(data);
    }
    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer {CLIENT_TOKEN}`
      },
      ...optionalFields,
      ...overrides
    });
    const json = await response.json();
    return json;
  } catch (error) {
    throw error;
  }
}

type ApiHandler = <ResponseT>(
  url: Request['url'],
  data: Request['body'],
  overrides?: RequestInit
) => Promise<ResponseT>;

function api(options: { useCache?: boolean; cacheExpiration?: number }): {
  get: <ResponseT>(url: Request['url']) => Promise<ResponseT>;
  post: ApiHandler;
  put: ApiHandler;
  patch: ApiHandler;
  delete: (url: Request['url']) => Promise<void>;
} {
  const cache = new Cache();
  return {
    get: (url) => {
      if (options.useCache) {
        const result = cache.get(url);
        if (result) return result.data;
      }
      const result = request('GET', url);
      if (options.useCache) {
        cache.set(url, {
          expiration: Date.now() + options.cacheExpiration,
          data: result
        });
      }
      return result;
    },
    post: (url, data, overrides) => request('POST', url, data, overrides),
    put: (url, data, overrides) => request('PUT', url, data, overrides),
    patch: (url, data, overrides) => request('PATCH', url, data, overrides),
    delete: (url) => request('DELETE', url)
  };
}

export default api;

// // Usage:
// const myApi = api({
//   useCache: true,
//   cacheExpiration: 5000
// });

// type Post = {
//   title: string;
// };

// myApi
//   .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
//   .then((posts) => console.log(posts[0].title))
//   .catch((error) => console.log('error:', error));
