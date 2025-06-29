
export const getNaverLoginUrl = () => {
  const NAVER_CLIENT_ID = import.meta.env.VITE_NAVER_CLIENT_ID;
  const REDIRECT_URI = import.meta.env.VITE_NAVER_REDIRECT_URI;

  const STATE = Math.random().toString(36).substring(2);
  sessionStorage.setItem('naver_oauth_state', STATE);
  
  return `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&state=${STATE}`;
};