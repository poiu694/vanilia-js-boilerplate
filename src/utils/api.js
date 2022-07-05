const BASE_URL = '';

const cache = {};

const requestAPI = async (url, isUsedCache = true) => {
  try {
    if (cache[url] && isUsedCache) {
      return cache[url];
    }
    const res = await fetch(`${BASE_URL}${url}`);
    if (!res.ok) {
      // fail fetch scenario
      throw new Error('API 호출 실패');
    } else {
      // success fetch scenario
      const data = await res.json();
      // save to cache
      if (isUsedCache) {
        cache[url] = data;
      }
      return {
        status: false,
        data,
      };
    }
  } catch (e) {
    return {
      status: true,
      data: null,
    }
  }
};

export default requestAPI;