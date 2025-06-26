import naverApi from '@/api/naverApi';

export const searchLocal = (query) => {
  return naverApi.get('v1/search/local', {
    params: { query, display: 10 },
  });
};

export const searchBlog = (query) => {
  return naverApi.get('v1/search/blog', {
    params: { query, display: 10 },
  });
};

export const searchBook = (query) => {
  return naverApi.get('v1/search/book', {
    params: { query, display: 10 },
  });
};