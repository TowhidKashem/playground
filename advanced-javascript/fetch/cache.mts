type CacheItem = {
  expiration: number;
  data: any;
};

export default class Cache {
  cache = new Map<string, CacheItem>();

  constructor() {
    //
  }

  get(key: string): CacheItem {
    const cacheItem = this.cache.get(key);
    if (cacheItem && cacheItem.expiration > Date.now()) {
      return cacheItem.data;
    }
  }

  set(key: string, value: CacheItem) {
    this.cache.set(key, value);
  }

  clear(key: string) {
    this.cache.delete(key);
  }
}
