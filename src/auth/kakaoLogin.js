
export const getKakaoLoginUrl = () => {
  const REST_API_KEY = import.meta.env.VITE_KAKAO_CLIENT_ID
  const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI
  const STATE = Math.random().toString(36).substring(2)
  sessionStorage.setItem('naver_oauth_state', STATE)
  
  return `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`
}