import naverApi from '@/api/naverApi'

export const searchBook = (query, display) => {
  return naverApi.get('v1/search/book', {
    params: { query, display },
  })
}