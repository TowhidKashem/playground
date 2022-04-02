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
        Authorization: `Bearer ${process.env.CLIENT_TOKEN}`
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

// Usage:
// api.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
const api: {
  get: <ResponseT>(url: Request['url']) => Promise<ResponseT>;
  post: ApiHandler;
  put: ApiHandler;
  patch: ApiHandler;
  delete: (url: Request['url']) => Promise<void>;
} = {
  get: (url: string) => request('GET', url),
  post: (url, data, overrides) => request('POST', url, data, overrides),
  put: (url, data, overrides) => request('PUT', url, data, overrides),
  patch: (url, data, overrides) => request('PATCH', url, data, overrides),
  delete: (url) => request('DELETE', url)
};

export default api;
